import React from 'react';
import './CircleText.css';

const CircleText = ({content}) => {
  return (
    <div className="circle">
      <span className="text">{content ? content : 'AZ'}</span>
    </div>
  );
};

export default CircleText;