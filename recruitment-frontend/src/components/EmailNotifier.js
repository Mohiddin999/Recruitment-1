import React, { useState } from 'react';

function EmailNotifier() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSendEmail = async () => {
    const payload = { email, message };

    const response = await fetch("https://3ordnfcxkjxsa4hxq545krtrju0slvwx.lambda-url.us-west-2.on.aws/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setStatus(data.status || "No response");
  };

  return (
    <div>
      <h2>Email Notifier</h2>
      <input
        type="email"
        placeholder="Candidate Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Email message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        cols={60}
      />
      <br />
      <button onClick={handleSendEmail}>Send Email</button>
      <pre>{status}</pre>
    </div>
  );
}

export default EmailNotifier;
