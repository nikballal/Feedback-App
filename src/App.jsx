import { v4 as uuidv4 } from "uuid"; //run npm i uuid on command line, this generates unique key for our feedback items
import { useState } from "react";
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log(feedback);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.ud = uuidv4();
    setFeedback([newFeedback, ...feedback]); //store it inside an array, since setFeedback is mutable.
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
