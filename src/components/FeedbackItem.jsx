import { FaTimes } from "react-icons/fa";
import React from "react";
import Card from "./Shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ eachItem, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{eachItem.rating}</div>
      <button onClick={() => handleDelete(eachItem.id)} className="close">
        {/* passing over to Feedback List */}
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{eachItem.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  eachItem: PropTypes.object.isRequired,
};

export default FeedbackItem;
