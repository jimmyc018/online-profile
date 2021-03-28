import React from 'react';
import cover from '../../assets/Shot2.png';

import './ProjectOne.scss';


const ProjectOne = () => (
  <div className="projectOne">
    <h1 className="projectOne__heading">Care App</h1>
    <div className="projectOne__cover">
    <img src={cover} alt='Project Cover' loading="lazy"/>
    </div>

  </div>

);

export default ProjectOne;
