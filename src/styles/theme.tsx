import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const lightTheme = {
  backgroundColor: '#FFFFFF',
  color: '#000000'
}

const darkTheme = {
  backgroundColor: '#000000',
  color: '#FFFFFF'
}

const GlobalStyles = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};

  h1, h2, h3, h4, h5, h6, p, span, li {
    color: ${({ theme }) => theme.color};
  }
`;

export function CustomTheme(props: any) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles>
        <button onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === 'light' ? ['fas', 'sun'] : ['fas', 'moon']}></FontAwesomeIcon>
        </button>
        {props.children}
      </GlobalStyles>
    </ThemeProvider>
  );
}
