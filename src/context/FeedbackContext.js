import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid"; //run npm i uuid on command line, this generates unique key for our feedback items

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //add a spinner state to show new feedback added
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //useEffect will run as soon as the page reloads
  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`); //https:localhost:5000 as proxy in package.json
    const resData = await response.json();
    setFeedback(resData);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]); //store it inside an array, since setFeedback is mutable.
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //update the feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

// hard-coded data
// {
//   id: 1,
//   text: "This is feedback item 1",
//   rating: 7,
// },
// {
//   id: 2,
//   text: "This is feedback item 2",
//   rating: 10,
// },
// {
//   id: 3,
//   text: "This is feedback item 3",
//   rating: 9,
// },
