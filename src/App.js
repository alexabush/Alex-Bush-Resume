import React from 'react';
import './App.css';

const data = {
  schools: [
    {
      school: 'Rithm School',
      endYear: '2018',
      description: 'Full-Stack Web Development Program'
    },
    {
      school: 'University of California, Davis',
      endYear: '2015',
      description: 'B.A. Communication'
    }
  ],
  jobs: [
    {
      title: 'Software Engineer',
      company: 'Rigup',
      startMonth: 'March',
      endMonth: 'May',
      endYear: '2019',
      workDetails: [
        'Added features to web app using React and AngularJS.',
        'Other technologies: storybook.js, formik, styled-components, Jest, Enzyme, Karma.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'VectorCare',
      startMonth: 'Oct',
      endMonth: 'Nov',
      endYear: '2018',
      workDetails: [
        'Refactored React / Redux app to minimize API calls and increased performance by 20 %.',
        'Used modern React and Redux paradigms / design patterns to create readable, maintainable code.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Groupmuse',
      startMonth: 'Aug',
      endMonth: 'Oct',
      endYear: '2018',
      workDetails: [
        'Designed reusable React Native(iOS) components using atomic design principles and styled components',
        'Utilized Storybook.js to increase UI development speed by 40%',
        'Increased testing coverage from 0% to 65% via snapshot testing using Jest with Enzyme'
      ]
    }
  ],
  technologies: [
    'Javascript ES6+',
    'React/Redux',
    'AngularJS',
    'Node.js/Express',
    'Python/Djanjo',
    'Ruby/Rails',
    'HTML5/CSS3',
    'PostgreSQL'
  ],
  projects: [
    {
      title: 'Language Learning',
      url: 'https://alexabush.github.io/',
      description: 'Card based language learning app with word assistance.'
    },
    {
      title: 'Workout Tracker',
      url: 'https://alexabush.github.io/',
      description: 'System for tracking resistance training programs'
    },
    {
      title: 'Spaced Repetition Study Aid',
      url: 'https://alexabush.github.io/',
      description:
        'Intelligent flashcards using algorithm to determine which cards are shown most often'
    },
    {
      title: 'Snake',
      url: 'https://alexabush.github.io/',
      description: 'classic browser game'
    },
    {
      title: 'Battleship',
      url: 'https://alexabush.github.io/',
      description: 'online version of board game'
    },
    {
      title: 'Connect Four',
      url: 'https://alexabush.github.io/',
      description: 'online version of game'
    }
  ],
  contact: {
    phone: '415-306-6894',
    email: 'alexabush7@gmail.com',
    portfolio: 'https://alexabush.github.io/',
    location: 'Austin, TX'
  }
};

function App() {
  let workExperiences = data.jobs.map(job => {
    return <WorkExperience {...job} />;
  });
  let educationExperiences = data.schools.map(school => {
    return <School {...school} />;
  });
  let projects = data.projects.map(project => {
    return (
      <div className="project">
        <Project {...project} />
      </div>
    );
  });
  return (
    <div className="App">
      <header className="header">
        <h1>Alex Bush</h1>
        <h2>Full Stack Software Engineer</h2>
      </header>
      <main className="main">
        <section className="left-section">
          <section className="section">
            <h2>Core Skills</h2>
            <Skills skills={data.technologies} />
          </section>
          <section className="section">
            <h2>Portfolio/Projects</h2>
            {projects}
          </section>
          <section className="section">
            <ContactInfo {...data.contact} />
          </section>
          <section className="section">
            <h2>Education</h2>
            {educationExperiences}
          </section>
        </section>
        <section className="right-section">
          <section className="section">
            <h2>Work Experience</h2>
            {workExperiences}
          </section>
        </section>
      </main>
      <footer />
    </div>
  );
}

function WorkExperience({
  title,
  company,
  startMonth,
  endMonth,
  endYear,
  workDetails = []
}) {
  let bulletPoints = workDetails.map(point => {
    return <p>{`- ${point}`}</p>;
  });
  return (
    <div className="job">
      <h3>{title}</h3>
      <div className="job-subheader">{`${company} | ${startMonth}-${endMonth} ${endYear}`}</div>
      <div>{bulletPoints}</div>
    </div>
  );
}

function School({ school = '', endYear = '', description = '' }) {
  return (
    <div>
      <h4>{`${school} | ${endYear}`}</h4>
      <p>{description}</p>
    </div>
  );
}

function Project({ title, url, description }) {
  return (
    <a href={url}>
      <p>
        <span className="project-title">{title}</span> | {description}
      </p>
    </a>
  );
}

function Skills({ title, skills }) {
  return <p>{skills.join(', ')}</p>;
}

function ContactInfo({ phone, email, portfolio, location }) {
  return (
    <section>
      <h2>Contact Info</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Portfolio: {portfolio}</p>
      <p>Location: {location}</p>
    </section>
  );
}

export default App;
