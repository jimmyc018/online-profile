import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ITheme from '../../styles/ITheme';

import './Navbar.scss';

interface IProp {
  children: React.ReactNode;
  themeStyle: ITheme;
  isProjectOne: boolean;
}

interface IState {
  isOpen: boolean;
  width: number;
}

class CustomNavbar extends React.Component<IProp, IState> {
  constructor(props: IProp) {
    super(props);
    this.state = { isOpen: false, width: window.innerWidth };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  handleClick = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { children, themeStyle, isProjectOne } = this.props;
    const { isOpen, width } = this.state;
    const NavbarEnd = styled.div`
      .navbar-item {
        a:after {
          background-color: ${themeStyle.color};
        }
      }
    `;

    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          backgroundColor: isProjectOne ? 'transparent' : themeStyle.backgroundColor,
          color: themeStyle.color
        }}
      >
        <div className="navbar-brand">
          <Link className="navbar-item custom-logo" to="/">
            <h3 className="navbar__heading"><span id="logo_Navbar">jimmy</span> chan</h3>
          </Link>

          <a
            role="button"
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
            onClick={this.handleClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarMenu"
          className={`navbar-menu ${isOpen || width > 1024 ? 'is-active' : ''}`}
          style={{backgroundColor: isProjectOne ? 'transparent' : themeStyle.backgroundColor}}
        >
          <NavbarEnd className="navbar-end">
            <div
              className="navbar-item navbar__spacing"
              style={{backgroundColor: isProjectOne ? 'transparent' : themeStyle.backgroundColor}}
            >
              <NavLink
                exact
                to="/"
                style={{color: themeStyle.navbarTextColor}}
                activeStyle={{
                  color: themeStyle.navbarActiveTextColor,
                  fontWeight: 600
                }}
              >
                work
              </NavLink>
            </div>
            <div
              className="navbar-item navbar__spacing"
              style={{backgroundColor: isProjectOne ? 'transparent' : themeStyle.backgroundColor}}
            >
              <NavLink
                to="/About"
                style={{color: themeStyle.navbarTextColor}}
                activeStyle={{
                  color: themeStyle.navbarActiveTextColor,
                  fontWeight: 600
                }}
              >
                about
              </NavLink>
            </div>
            {/* <div className="navbar-item" style={{backgroundColor: isProjectOne ? 'transparent' : themeStyle.backgroundColor}}>
              <a href="https://www.dropbox.com/s/ttk8h1czez3wwsa/Jimmy%20Chan%20Resume.pdf?dl=1" style={{color: themeStyle.navbarTextColor}}>Resume</a>
            </div> */}
            {/* <div className="navbar-item">{children}</div> */}
          </NavbarEnd>
        </div>
      </nav>
    );
  }
}

export default CustomNavbar;
