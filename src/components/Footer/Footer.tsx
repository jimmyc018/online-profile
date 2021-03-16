import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Footer.scss';

const CustomFooter = () => (
  <footer className="footer">
    <div className="footer__email">
      <a  href="mailto:jimmychan018@gmail.com">
        <FontAwesomeIcon className="footer__icon" icon={['fas', 'envelope']}></FontAwesomeIcon>
      </a>
      <a href="https://www.linkedin.com/in/jimmy-c-672a1a97/">
        <FontAwesomeIcon className="footer__icon  footer__padding" icon={['fab', 'linkedin']}></FontAwesomeIcon>
      </a>
      <a href="#">
        <FontAwesomeIcon className="footer__icon  footer__padding" icon={['fab', 'dribbble']}></FontAwesomeIcon>
      </a>
      <a href="https://github.com/jimmyc018">
        <FontAwesomeIcon className="footer__icon  footer__padding" icon={['fab', 'github']}></FontAwesomeIcon>
      </a>
    </div>
    <span className="footer__text">&copy; {(new Date()).getFullYear()} by Jimmy Chan</span>
  </footer>
);

export default CustomFooter;
