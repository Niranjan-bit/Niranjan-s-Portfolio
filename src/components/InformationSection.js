import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';


const AboutPageStyles = styled.div`
  padding: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .command-prompt {
    background-color: #F4F1DE;
    padding: 2rem;
    border-radius: 0; /* Make the edges 90 degrees */
    border: 2px solid white; /* Add black border */
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 75%; /* Make the container 75% of the screen */
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .command-prompt-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
  }
  .command-prompt-header span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .red {
    background-color: #ff605c;
  }
  .yellow {
    background-color: #ffbd44;
  }
  .green {
    background-color: #00ca4e;
  }
  .hero__heading {
    font-size: 2.5rem;
    span {
      display: inline-block;
      width: 100%;
    }
  }
  .about__info {
    margin-bottom: 0; /* Minimize the gap after the last line */
    .para {
      max-width: 100%;
    }
  }
  .text-container {
    font-size: 0.9rem; /* Reduced font size */
  }
  .about__subheading {
    font-size: 1.35rem; /* 1.5x bigger than the reduced font size */
  }
  .about__heading {
    font-size: 1.35rem; /* 1.5x bigger than the reduced font size */
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .command-prompt {
      width: 90%; /* Adjust for smaller screens */
      height: auto; /* Adjust height to fit content */
      max-height: 90vw; /* Ensure it doesn't exceed viewport width */
      overflow-y: auto; /* Add scroll if content overflows */
      margin: 0 auto; /* Center it with space on both sides */
    }
    .text-container {
      font-size: 0.8rem; /* Adjusted for smaller screens */
    }
    .about__subheading {
      font-size: 1.2rem; /* Adjusted for smaller screens */
    }
    .about__heading {
      font-size: 1.2rem; /* Adjusted for smaller screens */
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="command-prompt">
        <div className="command-prompt-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <div className="text-container">
          <h1 className="hero__heading">
            <span>Hi, I'm Niranjan Kangane</span>
          </h1>
          <div className="about__info">
            <PText>
              <br />
              My expertise lies in Data Structures and Algorithms (Java), Frontend Development (React.js, JavaScript), and Backend Development (Spring Boot). 
              While my experience is continually growing, my determination to learn and adapt sets me apart.<br />
              <br />
              My current job gives me a wide range of exposure in the field of technology. I am constantly seeking opportunities
              to learn, grow, and push the boundaries of what's possible in the field of development. 
              I believe that the intersection of data, technology, and innovation holds endless possibilities, and 
              I'm excited to be a part of that journey.<br />
              <br />
              No, I do not have 5+ years of professional experience, but what I will promise is that I have ability to grasp and learn things faster and use technology in real-life challenges.<br />
              <br />
              Beyond my professional pursuits, I enjoy watching Football, Formula 1, Cricket, TV shows, and movies. These interests keep me balanced and fuel my creativity.<br />
            </PText>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
