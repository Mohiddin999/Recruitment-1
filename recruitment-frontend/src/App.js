
// import React from 'react';
// import JDGenerator from './components/JDGenerator';
// import ResumeScreener from './components/ResumeScreener';
// import InterviewAnalysis from './components/InterviewAnalysis';
// import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <div className="section">
//         <h1>AI Recruitment Automation</h1>
//       </div>

//       <div className="section">
//         <h2>Job Description Generator</h2>
//         <JDGenerator />
//       </div>

//       <div className="section">
//         <h2>CV Screener</h2>
//         <ResumeScreener />
//       </div>

//       <div className="section">
//         <h2>Interview Analysis</h2>
//         <InterviewAnalysis />
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import JDGenerator from './components/JDGenerator';
import ResumeScreener from './components/ResumeScreener';
import InterviewAnalysis from './components/InterviewAnalysis';
import EmailNotifier from './components/EmailNotifier';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>AI Recruitment Automation</h1>
        <p>Streamline your hiring process with intelligent tools</p>
      </div>

      <div className="section">
        <JDGenerator />
      </div>

      <div className="section">
        <ResumeScreener />
      </div>

      <div className="section">
        <InterviewAnalysis />
      </div>

      <div className="section">
        <EmailNotifier />
      </div>
    </div>
  );
}

export default App;