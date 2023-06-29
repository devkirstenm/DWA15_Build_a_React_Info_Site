import React from "react"
import NavReactIcon from '../assets/nav-reactjs-icon.png';

export default function Navbar() {
  return (
    <nav>
      <img src={NavReactIcon} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}


/* IMPORTANT NOTE ABOUT IMAGES IN JSX - Change I had to make that differs from video
* In React, when using JSX, the src attribute of the <img> tag expects a JavaScript expression as its value, not a relative path string. 
* Therefore, you can't directly use the relative path string like './assets/reactjs-icon.png' within the JSX code of the <img> tag.

* However, you can assign the relative path to a variable and then use that variable within the src attribute. 
* This way, you can achieve a similar syntax to using a relative path string inline. Here's an example:
*/



