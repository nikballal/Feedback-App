import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./Shared/Spinner";

//'feedback' removed from prop, and inserted useContext
function FeedbackList() {
  //handleDelete removed from prop
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  } else {
    return isLoading ? (
      <Spinner />
    ) : (
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
                // handleDelete={handleDelete} //passing over to app.jsx
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
