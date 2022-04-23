import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return "No Feedback Yet";
  } else {
    return (
      <div className="container">
        <AnimatePresence>
          {feedback.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={index}
                eachItem={item}
                handleDelete={handleDelete} //passing over to app.jsx
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );

    //OR WITHOUT THE ANIMATION
    // return (
    //   <div className="container">
    //     {feedback.map((item, index) => {
    //       return (
    //         <FeedbackItem
    //           key={index}
    //           eachItem={item}
    //           handleDelete={handleDelete} //passing over to app.jsx
    //         />
    //       );
    //     })}
    //   </div>
    // );
  }
}

export default FeedbackList;
