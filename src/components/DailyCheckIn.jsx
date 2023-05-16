import React, { useState, useContext } from "react";
import DreamContext from "../contexts/DreamContext";

const DailyCheckIn = (props) => {
  const dreamContext = useContext(DreamContext);
  const { addDream } = dreamContext;

  const [dreamData, setDreamData] = useState("");

  // Handles the state of the form while user is typing
  const handleChange = (e) => {
    setDreamData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDream(dreamData);
    // Go to home after dream is submitted for that day
    props.updateDisplay();
  };

  return (
    <div className="dream-question">
      <p>What did you dream of last night...</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={dreamData} />
        <button className="dream-submit">Submit</button>
      </form>
    </div>
  );
};

export default DailyCheckIn;
