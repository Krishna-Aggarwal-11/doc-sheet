export const templates = [
  { id: "blank", label: "Blank Document", imageUrl: "/blank-document.svg" , initialContent : "" },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the proposed software development project.</p>

      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>

      <h2>Timeline</h2>
      <p>Project milestones and delivery schedule.</p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms. </p>
    `,
  },
  {
    id: "project-proposal",
    label: "Porject  Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Executive Summary</h2>
      <p>Brief overview of the project and its goals.</p>

      <h2>Project Goals</h2>
      <p> Objective and expected outcomes of the project.</p>

      <h2>Implementation Plan</h2>
      <p>Strategy and methodology for project execution.</p>

      <h2>Resources Required</h2>
      <p>Team , equipment, and budget requirements.</p>
      `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <h1>Business Letter</h1>
      <h2>Introduction</h2>
      <p>Introduction and purpose of the letter.</p>
      `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Contact Information]</p>

      <h2>Professional Summary</h2>
      <p>Brief summary of your professional experience and skills.</p>

      <h2>Work Experience</h2>
      <p>[Company Name] - [Job Title] - [Start Year] - [End Year]</p>

      <h2>Education</h2>
      <p>[Education details] - [Graduation Year]</p>

      <h2>Skills</h2>
      <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
      </ul>
`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Contact Information]</p>

      <h2>Objective</h2>
      <p>[Your objective for the position]</p>

      <h2>Experience</h2>
      <ul>

      `,
  },
  {
    id: "letter",
    label: " Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p>Subject: [Email Subject]</p>

      <p>Dear [Recipient Name],</p>

      <p>[Email Body]</p>

      <p>Best regards,<br>
      [Sender Name]
      </p>
      
      `,
  },
];
