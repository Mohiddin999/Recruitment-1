// import React, { useState } from 'react';

// function JDGenerator() {
//   const [title, setTitle] = useState('');
//   const [skills, setSkills] = useState('');
//   const [experience, setExperience] = useState('');
//   const [jdResult, setJdResult] = useState('');

//   const handleGenerateJD = async () => {
//     const payload = { title, skills, experience };
    
//     const response = await fetch("https://3h32qb75cp6n4gia7ceoveen2m0zytco.lambda-url.us-west-2.on.aws/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const data = await response.json();
//     setJdResult(data.job_description || "No result");
//   };

//   return (
//     <div>
//       <h2>Job Description Generator</h2>
//       <input placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
//       <input placeholder="Skills (comma separated)" value={skills} onChange={e => setSkills(e.target.value)} />
//       <input placeholder="Experience" value={experience} onChange={e => setExperience(e.target.value)} />
//       <button onClick={handleGenerateJD}>Generate JD</button>
//       <textarea value={jdResult} readOnly rows={10} cols={50} />
//     </div>
//   );
// }

// export default JDGenerator;
import React, { useState } from 'react';

function JDGenerator() {
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [jdResult, setJdResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateJD = async () => {
    if (!title || !skills || !experience) {
      setError('Please fill all fields');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const payload = { title, skills, experience };
      
      const response = await fetch("https://3h32qb75cp6n4gia7ceoveen2m0zytco.lambda-url.us-west-2.on.aws/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJdResult(data.job_description || "No result");
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setJdResult("Failed to generate JD. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="generator-container">
      <h2>Job Description Generator</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <input 
        placeholder="Job Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
      />
      
      <input 
        placeholder="Skills (comma separated)" 
        value={skills} 
        onChange={e => setSkills(e.target.value)} 
      />
      
      <input 
        placeholder="Experience" 
        value={experience} 
        onChange={e => setExperience(e.target.value)} 
      />
      
      <button onClick={handleGenerateJD} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'GENERATE JD'}
      </button>
      
      {jdResult && (
        <div className="result-container">
          <h3>Generated Job Description:</h3>
          <textarea value={jdResult} readOnly rows={10} />
        </div>
      )}
    </div>
  );
}

export default JDGenerator;