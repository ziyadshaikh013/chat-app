import React from "react";
import "./Infobar.css";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

function Infobar({ room }) {
  return (
    <div className="Infobar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" alt="online image" src={onlineIcon}></img>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close image"></img>
        </a>
      </div>
    </div>
  );
}

export default Infobar;
