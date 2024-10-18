import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero1.png';
import PText from './PText';
import { FaInstagram, FaLinkedin, FaGithub,  FaEnvelope } from 'react-icons/fa';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 200px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: white;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .left {
    flex: 4;
    margin-top: 40px;
  }
  .right {
    flex: 5;
  }
  .hero__heading {
    font-size: 2.5rem;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      background: #8360c3;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #2ebf91, #8360c3);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #2ebf91, #8360c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .hero__img {
    max-width: 450px;
    width: 100%;
    height: 450px;
    height: 100%;
    margin: 0 auto;
  }
  .hero__info {
    margin-top: 20px;
    font-size: 1.6rem;
    color: var(--dark-gray);
  }
  .hero__details {
    margin-top: 20px;
    font-size: 1.2rem;
    color: var(--dark-gray);
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
  }
  .hero__social {
    margin-top: 20px;
    display: flex;
    gap: 1rem;
    justify-content: center;
    a {
      color: var(--white);
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
      padding : 0;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .hero__heading {
      font-size: 1.4rem;
      text-align: center;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <div className="hero__img">
                <img src={HeroImg} alt="Niranjan" />
              </div>
            </div>
            <div className="right">
              <h1 className="hero__heading">
                <span>Hello, I'm</span>
                <span className="hero__name">Niranjan</span>
              </h1>
              <div className="hero__info">
                <PText>Software Developer</PText>
              </div>
              <div className="hero__details">
                <ul>
                  <li>Based in Pune, India</li>
                  <li>Software Engineer Trainee at Cognizant</li>
                  <li>Email: niranjankangane96@gmail.com</li>
                </ul>
              </div>
              <div className="hero__social">
                <a href="https://github.com/Niranjan-bit"><FaGithub /></a>
                <a href="https://instagram.com/niranjan.kangane"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/niranjankangane/"><FaLinkedin /></a>
                <a href="mailto:niranjankangane96@gmail.com"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
