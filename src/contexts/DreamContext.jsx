import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const DreamContext = React.createContext({
  dreams: [],
  addDream: (dream) => console.error("Please implement this function."),
  removeDream: (dreamId) => console.error("Please implement this function."),
});

const DreamContextProvider = ({ children }) => {
  // Format date nicely
  let today = format(new Date(), "MM/dd/yyyy");

  const [dreams, setDreams] = useState([]);

  // Retrieve dreams from local storage
  useEffect(() => {
    const dreams = JSON.parse(localStorage.getItem("dreams"));
    if (dreams) {
      setDreams(dreams);
    }
  }, []);

  const addDream = (dream) => {
    const newDream = { dream: dream, date: today, id: dreams.length + 1 };
    console.log("new dream added !", newDream);
    setDreams((prevDreamsArray) => {
      return [...prevDreamsArray, newDream];
    });
  };

  // Add new dreams to local storage when the dreams array is updated
  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

  const removeDream = (dreamId) => {
    console.log("remove dream id", dreamId);
    setDreams(dreams.filter((dream) => dream.id != dreamId));
    console.log(dreams);
  };

  return (
    <DreamContext.Provider
      value={{
        dreams,
        setDreams,
        addDream,
        removeDream,
      }}
    >
      {children}
    </DreamContext.Provider>
  );
};

export default DreamContext;
export { DreamContextProvider };
