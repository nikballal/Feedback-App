import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true); //set character limit by using button disabling
  const [message, setMessage] = useState(""); //set character limit

  function handleTextChange(e) {
    //setting character limit in the input field
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Please type in more than 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
    e.preventDefault();
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" children="Send" isDisabled={btnDisabled} />
          {/* 'version' prop becomes primary by default from proptypes, if not mentioned */}
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
