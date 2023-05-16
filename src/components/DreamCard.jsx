import React, { useContext, useState, useRef, useEffect } from "react";
import DreamContext from "../contexts/DreamContext";

const DreamCard = (props) => {
  // Only display 'read more' if the text is greater than the container
  const [overflowActive, setOverflowActive] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const dreamContext = useContext(DreamContext);
  const { removeDream } = dreamContext;
  const handleDelete = (e) => {
    removeDream(e.target.value);
  };

  // Use ref to check for overflow
  const textRef = useRef();

  function isOverflowActive(event) {
    return (
      event.offsetHeight < event.scrollHeight ||
      event.offsetWidth < event.scrollWidth
    );
  }

  useEffect(() => {
    if (isOverflowActive(textRef.current)) {
      setOverflowActive(true);
      return;
    }

    setOverflowActive(false);
  }, []);

  // Displays details on 'read more' click
  const readMoreHandler = () => {
    setReadMore(true);
  };

  // Close the details popup
  const closeHandler = () => {
    setReadMore(false);
  };

  return (
    <div>
      <div className="card">
        <div className="ribbon">
          <span className="ribbon3">{props.date}</span>
        </div>
        <p ref={textRef}>{props.dream}</p>
        {overflowActive && (
          <button className="read-more" onClick={readMoreHandler}>
            Read more
          </button>
        )}
        <button
          className="delete-entry"
          value={props.id}
          onClick={handleDelete}
        >
          Delete Entry
        </button>
      </div>
      {readMore && (
        <div className="dream-detail">
          <p onClick={closeHandler} className="close-button">
            X
          </p>
          <h2 className="date-header">Dream on {props.date}</h2>
          {props.dream}
        </div>
      )}
    </div>
  );
};

export default DreamCard;
