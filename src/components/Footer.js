import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  background-color: black;
  padding: 2rem 0;
  text-align: center;
  }
  .copyright {
    color: white;
    font-size: 1.2rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="copyright">
        Copyright © Niranjan Kangane
      </div>
    </FooterStyle>
  );
}
