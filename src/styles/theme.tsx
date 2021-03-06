import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import CustomNavbar from '../components/Navbar/Navbar';
import './theme.scss';

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
        <CustomNavbar themeStyle={theme === 'light' ? lightTheme : darkTheme}>
          <button
            className="button"
            onClick={toggleTheme}
            style={{
              backgroundColor: theme === 'light' ? lightTheme.backgroundColor : darkTheme.backgroundColor,
              color: theme === 'light' ? lightTheme.color : darkTheme.color
            }}
          >
            <FontAwesomeIcon icon={theme === 'light' ? ['fas', 'sun'] : ['fas', 'moon']}></FontAwesomeIcon>
          </button>
        </CustomNavbar>
        <div className="page-content">
          {props.children}
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}
