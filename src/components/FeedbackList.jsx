import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return "No Feedback Yet";
  } else {
    return (
      <div className="container">
        {feedback.map((item, index) => {
          return (
            <FeedbackItem
              key={index}
              eachItem={item}
              handleDelete={handleDelete} //passing over to app.jsx
            />
          );
        })}
      </div>
    );
  }
}

export default FeedbackList;
