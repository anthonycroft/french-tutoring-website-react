

import React from 'react';
import './PillNavigationItem.css';
import "bootstrap/dist/css/bootstrap.min.css";

const PillNavigationItem = ({ attrClass, dataNumber, attrId, href, text, attrAria }) => {


  return (
  
    <li class="nav-item  p-1">
      <a class={attrClass} data-number={dataNumber} id={attrId} aria-current={attrAria} href={href} >{text}</a>
    </li>

  );
};

export default PillNavigationItem;

