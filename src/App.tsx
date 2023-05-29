import React from 'react';
import styled from 'styled-components';
import Profile from './components/Profile';
import GlobalStyles from './ui/GlobalStyles';
import Logo from './ui/Logo';
import Wrapper from './ui/Wrapper';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

window.onerror = e => console.log(e);
const App: React.FC = () => {
  return (
    <AppWrapper>
      <Wrapper>
        <GlobalStyles />
        <Logo />
        <Profile />
      </Wrapper>
    </AppWrapper>
  );
};

export default App;
