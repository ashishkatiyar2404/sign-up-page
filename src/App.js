import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <h4>
        <svg
          width="30"
          height="32"
          viewBox="0 0 30 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4167 17.5833V14.4167H29.1667V16C29.1667 24.7445 22.8241 31.8333 15 31.8333C7.17601 31.8333 0.833374 24.7445 0.833374 16C0.833374 7.25549 7.17601 0.166664 15 0.166664C19.3632 0.166664 23.4027 2.38729 26.0738 6.1241L23.8601 8.10064C21.7211 5.10817 18.4926 3.33333 15 3.33333C8.74081 3.33333 3.66671 9.00439 3.66671 16C3.66671 22.9956 8.74081 28.6667 15 28.6667C20.7795 28.6667 25.5486 23.8317 26.2457 17.5833H16.4167Z"
            fill="white"
          />
        </svg>
        &nbsp; Continue with google
      </h4>
      <hr />
      <div className="email">
        <span>Email Address</span>
        <p>rajabishek@hotmail.com</p>
      </div>
      <div className="email__message">
        <p className="first_child">Please check your email</p>
        <svg
          className="email__message__svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.8 6H13.2V8.4H10.8V6Z" fill="black" fill-opacity="0.54" />
          <path
            d="M10.8 10.8H13.2V18H10.8V10.8Z"
            fill="black"
            fill-opacity="0.54"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 12C0 5.376 5.37598 0 12 0C18.624 0 24 5.376 24 12C24 18.624 18.624 24 12 24C5.37598 24 0 18.624 0 12ZM2.4 12C2.4 17.292 6.70796 21.6 12 21.6C17.292 21.6 21.6 17.292 21.6 12C21.6 6.708 17.292 2.4 12 2.4C6.70796 2.4 2.4 6.708 2.4 12Z"
            fill="black"
            fill-opacity="0.54"
          />
        </svg>

        <p className="second_child">
          We’ve sent a temporary authorization code to rajabisek@hotmail.com. It
          may take a few minutes to arrive.
        </p>
      </div>
      <textarea placeholder="Please paste authorization code"></textarea>
      <button className="login_button">Log in</button>
    </div>
  );
}
