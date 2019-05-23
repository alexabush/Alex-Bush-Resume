import React from 'react';
import logo from './logo.svg';
import './App.css';

const data = {
  schools: [
    {
      school: 'Rithm School',
      endYear: '2018',
      description: 'Full-Stack Web Development Program',
    },
    {
      school: 'University of California, Davis',
      endYear: '2015',
      description: 'B.A. Communication',
    },
    {
      school: 'College of Marin',
      endYear: '2017',
      description: 'Computer Science Coursework',
    },
  ],
  jobs: [
    {
      title: 'Software Engineer',
      company: 'Rigup',
      startMonth: 'March',
      endMonth: 'May',
      endYear: '2019',
      workDetails: [
        'Refactored React / Redux app to minimize API calls and increased performance by 20 %.',
        'Used modern React and Redux paradigms / design patterns to create readable, maintainable code.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'VectorCare',
      startMonth: 'October',
      endMonth: 'November',
      endYear: '2018',
      workDetails: [
        'Refactored React / Redux app to minimize API calls and increased performance by 20 %.',
        'Used modern React and Redux paradigms / design patterns to create readable, maintainable code.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Groupmuse',
      startMonth: 'August',
      endMonth: 'October',
      endYear: '2018',
      workDetails: [
        'Designed reusable React Native(iOS) components using atomic design principles and styled components',
        'Utilized Storybook.js to increase UI development speed by 40%',
        'Increased testing coverage from 0% to 65% via snapshot testing using Jest with Enzyme',
      ],
    },
  ],
  technologies: [
    'Javascript ES6+',
    'React',
    'AngularJS',
    'Node.js/Express',
    'Python',
    'Flask',
    'Redux',
    'HTML5',
    'CSS3',
    'PostgreSQL',
  ],
  projects: [
    {
      title: 'Snake',
      url: '',
    },
    {
      title: 'Battleship',
      url: '',
    },
    {
      title: 'Connect Four',
      url: '',
    },
  ],
  contact: {
    phone: '415-306-6894',
    email: 'alexabush7@gmail.com',
    portfolio: 'https://alexabush.github.io/',
    location: 'Austin, TX',
  },
};

function App() {
  let workExperiences = data.jobs.map(job => {
    return <WorkExperience {...job} />;
  });
  let educationExperiences = data.schools.map(school => {
    return <School {...school} />;
  });
  let projects = data.projects.map(project => {
    return <Project {...project} />;
  });
  return (
    <div className="App">
      <header>
        <h1>Alex Bush</h1>
        <h2>Full Stack Software Engineer</h2>
      </header>
      <main>
        <section>
          <h3>Core Skills</h3>
          <Skills skills={data.technologies} />
        </section>
        <section>
          <h3>Work Experience</h3>
          {workExperiences}
        </section>
        <section>
          <h3>Education</h3>
          {educationExperiences}
        </section>
        <section>
          <h3>Projects</h3>
          {projects}
        </section>
        <ContactInfo {...data.contact} />
      </main>
      <footer />
    </div>
  );
}

function WorkExperience({ title, company, startMonth, endMonth, endYear, workDetails = [] }) {
  let bulletPoints = workDetails.map(point => {
    return <p>{`- ${point}.`}</p>;
  });
  return (
    <div>
      <h3>{title}</h3>
      <div>{`${company} | ${startMonth}-${endMonth} ${endYear}`}</div>
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

function Project({ title, url }) {
  return (
    <a href={url}>
      <p>{title}</p>
    </a>
  );
}

function Skills({ title, skills }) {
  return <p>{skills.join(', ')}</p>;
}

function ContactInfo({ phone, email, portfolio, location }) {
  return (
    <section>
      <h3>Contact Info</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Portfolio: {portfolio}</p>
      <p>Location: {location}</p>
    </section>
  );
}

export default App;
