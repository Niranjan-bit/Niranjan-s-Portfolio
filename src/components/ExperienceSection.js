import React, { useState } from 'react';
import styled from 'styled-components';

const TimelineStyles = styled.div`
  padding: 7rem 0;
   /* Changed color to blue */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  .timeline::before {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #4a90e2; /* Changed color */
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1; /* Move the line behind the elements */
  }

  .timeline-element {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    transition: transform 0.3s ease-in-out;
  }

  .timeline-element:hover {
    transform: scale(1.05);
  }

  .timeline-element::after {
    content: ' ';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #4a90e2; /* Changed color */
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  .left {
    left: 0;
  }

  .right {
    left: 50%;
  }

  .right::before,
  .left::before {
    display: none; /* Remove triangles */
  }

  .right::after {
    left: -16px;
  }

  .content {
    padding: 20px 30px;
    background-color: #e9ecef;
    position: relative;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  .content:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  h1 {
    font-size: 5rem; /* Increased font size */
    text-align: left;
    margin-bottom: 5rem;
    color: #BCB4B4; /* Changed color */
    padding-left: 3rem; /* Added padding to shift right */
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  h3, h4, p {
    margin: 0;
  }

  h3 {
    font-size: 1.8rem; /* Increased font size */
    color: #4a90e2; /* Changed color */
  }

  h4 {
    font-size: 1.5rem; /* Increased font size */
    color: #333;
    cursor: pointer;
    position: relative;
  }

  p {
    font-size: 1.2rem; /* Increased font size */
    color: #666;
  }

  .details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .details.show {
    max-height: 500px; /* Adjust based on content */
    transition: max-height 0.5s ease-in;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .icon i {
    font-size: 2.5rem; /* Increased font size */
    color: #4a90e2; /* Changed color */
    border: 3px solid #4a90e2; /* Added border */
    border-radius: 50%; /* Circular border */
    padding: 10px;
    background-color: white; /* Background color */
  }
`;

const experiences = [
  {
    title: 'Software Engineer Trainee',
    company: 'Cognizant',
    years: 'Dec 2023 - current',
    description: `Worked on developing and maintaining web applications using React and Node.js.
    • Developed Restful APIs using Spring MVC and Spring Security, ensuring seamless back-end system integration.
    • Responsible for developing and maintaining the account management system, it involved implementing the core functionalities such as deposit, withdrawal, and balance retrieval.
    • Worked on improving the search procedure to efficiently manage big datasets, resulting in an improved response time by 22% for transaction record retrieval through the usage of Spring Data JPA and pagination.
    • Analyzed over 100 APIs to develop logic for new applications and debugging existing APIs, ensuring optimal performance. Implemented swagger for API testing, which reduced integration time by 26%.
    • Participated in the full life-cycle development process from product definition, design, development, test, release, and maintenance.`,
  },
  {
    title: 'Internship - ReactJS Developer Intern',
    company: 'ProInsights',
    years: 'August - September 2021',
    description: `Worked as a Junior React.js Developer Intern.
    • Engineered a platform to help companies test hypotheses and gather customer feedback for product insights, driving informed decision-making and improving product development.
    • Enhanced market research accuracy by 40% by enabling video calls and chats between companies and consumers, significantly improving data quality and engagement.
    • Integrated Agora Video Calling services to implement robust video calling features and developed a scheduling system for meetings, increasing communication efficiency by 50%.
    • Worked with proper team equipped with technologies like ReactJS, Node.JS, MongoDB, Redux, Sockets.io and DevOps.`,
  },
  {
    title: 'Frontend Developer',
    company: 'Google Developer Student Club',
    years: 'September 2021 - August 2022',
    description: `Developed and designed the structure of Google Developers Student Club's website.
    • Created and collaborated with a team of 4 people.
    • Lived through the SDLC life cycle.`,
  },
  {
    title: 'Internship - Web Developer Intern',
    company: 'HC Roots',
    years: 'May 2021 - July 2021',
    description: `Worked as a Web Developer Intern.
    • Spearheaded end-to-end development of the website for organizations to conduct online exams and quizzes.
    • Designed and structured web pages for an attractive and user-friendly application, including Login System, Activity log, and System log.
    • Lived through the SDLC life cycle.`,
  },
];


export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <TimelineStyles>
      <div className="timeline">
        <h1 className="about__info__heading">Experience</h1>
        {experiences.map((work, index) => (
          <div
            className={`timeline-element ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="content">
              <h3>{work.title}</h3>
              <h4
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {work.company}
              </h4>
              <p>{work.years}</p>
              <div className={`details ${activeIndex === index ? 'show' : ''}`}>
                <p>{work.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="icon">
          <i className="fas fa-hourglass-half"></i>
        </div>
      </div>
    </TimelineStyles>
  );
}
