import React from "react";

function Card({ children, reverse }) {
  //conditional class
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>; //include 'reverse' only if 'true' from line 6 of FeedbackItem.js

  //OR

  //conditional style
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false, //incase you dont pass in reverse prop in line 6 of 'FeedbackItem.jsx'
};

export default Card;
