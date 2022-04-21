import React from "react";
import Card from "./Shared/Card";

function FeedbackItem({ eachItem }) {
  return (
    <Card>
      <div className="num-display">{eachItem.rating}</div>
      <div className="text-display">{eachItem.text}</div>
    </Card>
  );
}

export default FeedbackItem;
