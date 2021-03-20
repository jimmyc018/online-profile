import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router';

import CustomNavbar from '../components/Navbar/Navbar';
import CustomFooter from '../components/Footer/Footer';
import LightTheme from './LightTheme';
import './Theme.scss';

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

class CustomTheme extends React.Component<any, IState> {
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

  toggleTheme = () => this.setState(state => ({ currentTheme: 'light' }));

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
    const { children, location } = this.props;
    const { currentTheme, displayScrollBtn } = this.state;

    return (
      <ThemeProvider theme={LightTheme}>
        <GlobalStyles>
          <div
            className="bg-img"
            style={{
              height: location.pathname === '/ProjectOne' ? '100vh' : 'auto'
            }}
          >
            <CustomNavbar themeStyle={LightTheme} isProjectOne={location.pathname === '/ProjectOne'}>
              {/* <button
                className="button"
                onClick={this.toggleTheme}
                style={{
                  backgroundColor: LightTheme.backgroundColor,
                  color: LightTheme.color,
                  borderRadius: '50%',
                  borderWidth: 2,
                  height: '50px'
                }}
              >
                <FontAwesomeIcon icon={['fas', 'sun']}></FontAwesomeIcon>
              </button> */}
            </CustomNavbar>
          </div>
          <main role="main" className="page-content">
            {children}
            <button
              className={`button scroll-btn ${displayScrollBtn ? 'scroll-btn--show' : ''}`}
              onClick={this.scrollToTop}
            >
              <FontAwesomeIcon icon={['fas', 'chevron-up']}></FontAwesomeIcon>
            </button>
          </main>
          <CustomFooter></CustomFooter>
        </GlobalStyles>
      </ThemeProvider>
    );
  }
}

export default withRouter(CustomTheme);
