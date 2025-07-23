import React, { useState } from 'react';

function ResumeScreener() {
  const [jdText, setJdText] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [screenResult, setScreenResult] = useState('');

  const handleScreenCV = async () => {
    const payload = { jd: jdText, resume: resumeText };

    const response = await fetch("https://5pqumrca6h2urv7pwzxarou3ci0uddqy.lambda-url.us-west-2.on.aws/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setScreenResult(data.result || "No output");
  };

  return (
    <div>
      <h2>CV Screener</h2>
      <textarea
        placeholder="Paste Job Description here"
        value={jdText}
        onChange={(e) => setJdText(e.target.value)}
        rows={6}
        cols={60}
      />
      <br />
      <textarea
        placeholder="Paste Resume Text here"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        rows={6}
        cols={60}
      />
      <br />
      <button onClick={handleScreenCV}>Screen CV</button>
      <pre>{screenResult}</pre>
    </div>
  );
}

export default ResumeScreener;
