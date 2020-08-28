import React from "react";
import loginImg from "./login.svg";
import "./style2.scss";

export class Register extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            <div className="base-container">
      <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="loginimage" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="roll">RollNo</label>
              <input type="text" name="roll" placeholder="RollNo" />
            </div>
            <div className="form-group">
              <label htmlFor="phn">PhoneNo</label>
              <input type="text" name="phn" placeholder="PhoneNo" />
            </div>
            <div className="form-group">
              <label htmlFor="room">RoomNo</label>
              <input type="text" name="room" placeholder="RoomNo" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
          </div>
        </div>
      </div>
    );
  }
}
