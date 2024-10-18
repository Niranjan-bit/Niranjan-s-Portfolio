import React from 'react';
import styled from 'styled-components';

import AboutInfoItem1 from '../components/AboutInfoItem1';

const AboutPageStyles = styled.div`
  padding: 5rem 0 3.5rem 0;
  background-color: white;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 2.5rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="about__info__item">
          <h1 className="about__info__heading">My Skills</h1>
          <AboutInfoItem1
            title="Programming Languages"
            items={['Java', 'JavaScript', 'SQL', 'HTML', 'CSS']}
          />
          <AboutInfoItem1
            title="Web Frameworks"
            items={['ReactJS', 'SpringBoot', 'Spring MVC', 'Spring Security', 'JUnit', 'Node.js']}
          />
          <AboutInfoItem1
            title="Databases"
            items={['MySQL', 'MongoDB']}
          />
                    <AboutInfoItem1
            title="Cloud"
            items={['AWS']}
          />
          <AboutInfoItem1
            title="Developer Tools"
            items={['Git', 'Postman', 'REST API']}
          />
          <AboutInfoItem1
            title="UI & Design"
            items={['Figma', 'JSP', 'Servlet', 'React.js']}
          />
        </div>
      </div>
    </AboutPageStyles>
  );
}
