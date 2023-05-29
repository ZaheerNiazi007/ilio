import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/icons/logo.svg';

const LogoWrapper = styled.div`

  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100px; /* Adjust the width to your desired size */
  height: auto; /* Maintain the aspect ratio */
`;

const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <LogoImage src={logo} alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;
