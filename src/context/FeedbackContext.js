import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //run npm i uuid on command line, this generates unique key for our feedback items

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 10,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 10,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.ud = uuidv4();
    setFeedback([newFeedback, ...feedback]); //store it inside an array, since setFeedback is mutable.
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
