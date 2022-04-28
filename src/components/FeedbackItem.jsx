import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import React from "react";
import Card from "./Shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ eachItem }) {
  //handleDelete removed
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{eachItem.rating}</div>
      <button onClick={() => deleteFeedback(eachItem.id)} className="close">
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
