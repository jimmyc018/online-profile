import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './Navbar.scss';

interface IState {
  isOpen: boolean;
  width: number;
}

class CustomNavbar extends React.Component<any, IState> {
  constructor(props: any) {
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
    this.setState((state: any) => ({ isOpen: !state.isOpen }))
  };

  render() {
    const { children, themeStyle } = this.props;
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
          backgroundColor: themeStyle.backgroundColor,
          color: themeStyle.color
        }}
      >
        <div className="navbar-brand">
          <Link className="navbar-item custom-logo" to="/">
            <h2>Jimmy Chan</h2>
          </Link>

          <a
            role="button"
            className="navbar-burger"
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
          style={{backgroundColor: themeStyle.backgroundColor}}
        >
          <NavbarEnd className="navbar-end">
            <div className="navbar-item" style={{backgroundColor: themeStyle.backgroundColor}}>
              <Link to="/" style={{color: themeStyle.color}}>Work</Link>
            </div>
            <div className="navbar-item" style={{backgroundColor: themeStyle.backgroundColor}}>
              <Link to="/" style={{color: themeStyle.color}}>About</Link>
            </div>
            <div className="navbar-item" style={{backgroundColor: themeStyle.backgroundColor}}>
              <Link to="/" style={{color: themeStyle.color}}>Resume</Link>
            </div>
            <div className="navbar-item">{children}</div>
          </NavbarEnd>
        </div>
      </nav>
    );
  }
}

export default CustomNavbar;
