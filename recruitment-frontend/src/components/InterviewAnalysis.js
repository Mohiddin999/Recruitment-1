import React, { useState } from 'react';

function InterviewAnalysis() {
  const [transcript, setTranscript] = useState('');
  const [analysis, setAnalysis] = useState('');

  const handleAnalyze = async () => {
    const payload = { transcript };

    const response = await fetch("https://q2f26peyycx3cvkqa2otulptoa0duzjh.lambda-url.us-west-2.on.aws/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setAnalysis(data.summary || "No result");
  };

  return (
    <div>
      <h2>Interview Analysis</h2>
      <textarea
        placeholder="Paste interview transcript"
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        rows={10}
        cols={60}
      />
      <br />
      <button onClick={handleAnalyze}>Analyze Interview</button>
      <pre>{analysis}</pre>
    </div>
  );
}

export default InterviewAnalysis;
