import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return "No Feedback Yet";
  } else {
    return (
      <div class="container">
        {feedback.map((item, index) => {
          return <FeedbackItem key={index} eachItem={item} />;
        })}
      </div>
    );
  }
}

export default FeedbackList;
