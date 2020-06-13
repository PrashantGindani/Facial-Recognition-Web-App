import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <span className="headtext">Facial Recognition App</span>
        {/* <li>
          <Link to="/photo">Photo Input</Link>
        </li> */}
        <br />
        <br />
        <br />
        <Link to="/camera" className="main-btn">
          Video Camera
        </Link>
      </div>
    );
  }
}
