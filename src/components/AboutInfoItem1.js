import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3.5rem;
  position: relative;
  .title {
    font-size: 2.1rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 23rem;
    margin-left: 160px;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 0.9rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      margin-left: 40px;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem1({
  title = 'this is title',
  items = ['HTML', 'CSS', 'JS'],
}) {
  return (
    <AboutItemStyles1>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles1>
  );
}


















