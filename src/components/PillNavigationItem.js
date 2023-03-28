

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const PillNavigationItem = ({ attrClass, dataNumber, attrId, href, text, attrAria }) => {


  return (
  
    <li className="nav-item p-1">
      <a className={attrClass} data-number={dataNumber} id={attrId} aria-current={attrAria} href={href} >{text}</a>
    </li>

  );
};

export default PillNavigationItem;

