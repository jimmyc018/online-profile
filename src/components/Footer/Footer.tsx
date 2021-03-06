import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Footer.scss';

const CustomFooter = () => (
  <footer className="footer">
    <div className="footer__left-area">
      <FontAwesomeIcon className="footer__icon" icon={['far', 'hand-point-right']}></FontAwesomeIcon>
      <div className="footer__contact">
        <p className="footer__text footer__title">Wanna get in touch?</p>
        <div className="footer__email">
          <FontAwesomeIcon className="footer__icon" icon={['fas', 'envelope']}></FontAwesomeIcon>
          <p className="footer__text">Email Me</p>
        </div>
      </div>
    </div>
    <span className="footer__text">Copyright &copy; {(new Date()).getFullYear()} Jimmy Chan</span>
  </footer>
);

export default CustomFooter;
