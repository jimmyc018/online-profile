import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import CustomNavbar from '../components/Navbar/Navbar';
import CustomFooter from '../components/Footer/Footer';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
import './theme.scss';

const GlobalStyles = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};

  h1, h2, h3, h4, h5, h6, p, span, li, blockquote {
    color: ${({ theme }) => theme.color};
  }
`;

interface IState {
  currentTheme: string;
  displayScrollBtn: boolean;
}

export class CustomTheme extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { currentTheme: 'light', displayScrollBtn: false };
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  toggleTheme = () => this.setState((state) => ({ currentTheme: state.currentTheme === 'light' ? 'dark' : 'light' }));

  handleScroll = () => {
    const rootElement = document.documentElement;
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / scrollTotal ) > 0.50) {
      this.setState({ displayScrollBtn: true });
    } else {
      this.setState({ displayScrollBtn: false });
    }
  };

  scrollToTop = () => {
    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  render() {
    const { children } = this.props
    const { currentTheme, displayScrollBtn } = this.state;

    return (
      <ThemeProvider theme={currentTheme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyles>
          <CustomNavbar themeStyle={currentTheme === 'light' ? LightTheme : DarkTheme}>
            {/* <button
              className="button"
              onClick={this.toggleTheme}
              style={{
                backgroundColor: currentTheme === 'light' ? LightTheme.backgroundColor : DarkTheme.backgroundColor,
                color: currentTheme === 'light' ? LightTheme.color : DarkTheme.color,
                borderRadius: '50%',
                borderWidth: 2,
                height: '50px'
              }}
            >
              <FontAwesomeIcon icon={currentTheme === 'light' ? ['fas', 'sun'] : ['fas', 'moon']}></FontAwesomeIcon>
            </button> */}
          </CustomNavbar>
          <div className="page-content">
            {children}
            <button
              className={`button scroll-btn ${displayScrollBtn ? 'scroll-btn--show' : ''}`}
              onClick={this.scrollToTop}
            >
              <FontAwesomeIcon icon={['fas', 'chevron-up']}></FontAwesomeIcon>
            </button>
          </div>
          <CustomFooter></CustomFooter>
        </GlobalStyles>
      </ThemeProvider>
    );
  }
}
