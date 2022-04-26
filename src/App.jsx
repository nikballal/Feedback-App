import { v4 as uuidv4 } from "uuid"; //run npm i uuid on command line, this generates unique key for our feedback items
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //you can avoid using /#about, instead use /about in the url
import { useState } from "react";
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          {/* home page route */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  {/* prop feedback={feedback} removed from FeedbackStats*/}
                  <FeedbackList handleDelete={deleteFeedback} />
                  {/* prop feedback={feedback} removed from FeedbackList*/}
                </>
              }
            ></Route>
            {/* about page route, using 'element' instead of component for react-router-dom v6 */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
