import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Footer.scss';

const CustomFooter = () => (
  <footer className="footer">
    {/* <FontAwesomeIcon className="footer__icon" icon={['far', 'hand-point-right']}></FontAwesomeIcon> */}
    <div className="footer__email">
      <a  href="mailto:jimmychan018@gmail.com">
        <FontAwesomeIcon className="footer__icon" icon={['fas', 'envelope']}></FontAwesomeIcon>
      </a>
      {/* <p className="footer__text">Email Me</p> */}
      <a href="https://www.linkedin.com/in/jimmy-c-672a1a97/">
        <FontAwesomeIcon className="footer__linkedin  footer__padding" icon={['fab', 'linkedin-in']}></FontAwesomeIcon>
      </a>
    </div>
    <span className="footer__text">Copyright &copy; {(new Date()).getFullYear()} Jimmy Chan</span>
  </footer>
);

export default CustomFooter;
