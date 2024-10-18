import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  .title {
    font-size: 2.4rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    text-align: center;
    background: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 250px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #f3ec78, #af4261);
    opacity: 0.2;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  .item:hover::before {
    opacity: 0.3; /* Lighter hover color */
  }
  .item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .icon {
    font-size: 2rem; /* Reduced icon size */
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
    .items {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'this is title',
  items = ['HTML', 'CSS', 'JS'],
  icon = <FaGraduationCap />,
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="icon">{icon}</div>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
