

import React from 'react';
import './PillNavigationItem.css';
import "bootstrap/dist/css/bootstrap.min.css";

const PillNavigationItem = ({ attrClass, dataNumber, attrId, href, text, aria }) => {

  const attrAria = aria ? "aria-current=" + aria : null;

  return (
    // Pill navigation (Theme selector): Aside semantic tag

    <li class="nav-item  p-1">
      <a class={"nav-link " + {attrClass}} data-number={dataNumber} id={attrId} attrAria href={href} >{text}</a>
    </li>

  );
};

export default PillNavigationItem;

