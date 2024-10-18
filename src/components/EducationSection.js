import React, { useState } from 'react';
import styled from 'styled-components';

const TimelineStyles = styled.div`
  padding: 5rem 0;
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
    background-color: white;
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

  @media (max-width: 768px) {
    .timeline::before {
      display: none; /* Remove the timeline line */
    }

    .timeline-element {
      width: 90%; /* Reduce the width of the boxes */
      padding-left: 20px; /* Add padding to the sides */
      padding-right: 20px; /* Add padding to the sides */
      text-align: center; /* Center the text */
      margin: 0 auto; /* Center the boxes */
    }

    .timeline-element::after {
      display: none; /* Remove the bullet points */
    }

    .left, .right {
      left: 0;
    }

    .content {
      padding: 15px 20px;
      margin-bottom: 20px; /* Add space between boxes */
    }

    h1 {
      font-size: 3rem; /* Adjusted font size */
      text-align: center;
    }

    h3 {
      font-size: 1.5rem; /* Adjusted font size */
    }

    h4 {
      font-size: 1.2rem; /* Adjusted font size */
    }

    p {
      font-size: 1rem; /* Adjusted font size */
    }

    .icon {
      display: none; /* Hide the sand clock icon */
    }
  }
`;

const education = [
  {
    title: 'Bachelor of Engineering',
    institution: 'Savitribai Phule Pune University',
    years: '2019 - 2023',
    grade: '8.13 CGPA',
    course: 'Electronics and Telecommunication Engineering',
  },
  {
    title: 'Higher Secondary School',
    institution: 'Modern College of Arts, Commerce & Science, Pune',
    years: '2017 - 2019',
    grade: '62%',
    course: '12th Science',
  },
  {
    title: 'Secondary School',
    institution: 'Modern Boys High School, Pune',
    years: '2016 - 2017',
    grade: '84%',
    course: '10th Board',
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
        <h1>Education</h1>
        {education.map((edu, index) => (
          <div
            className={`timeline-element ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="content">
              <h3>{edu.title}</h3>
              <h4
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {edu.institution}
              </h4>
              <p>{edu.years}</p>
              <div className={`details ${activeIndex === index ? 'show' : ''}`}>
                <p><strong>Course:</strong> {edu.course}</p>
                <p><strong>Grade:</strong> {edu.grade}</p>
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
