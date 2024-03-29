import React, { useContext } from "react";
import DreamContext from "../contexts/DreamContext";
import DreamCard from "./DreamCard";

const Home = (props) => {
  const dreamContext = useContext(DreamContext);
  const { dreams } = dreamContext;

  // Render analysis page when clicked
  const clickHandler = () => {
    props.updateDisplay();
  };

  // Display all the dreams
  const dreamItems = dreams.map((element) => {
    return (
      <DreamCard date={element.date} dream={element.dream} id={element.id} />
    );
  });

  return (
    <div className="home">
      <header>
        <p>Dream Journal</p>
        <p className="analyze-header" onClick={clickHandler}>
          Analyze?
        </p>
      </header>
      <p className="body-text light">Library</p>
      <div className="dream-cards">{dreamItems}</div>
    </div>
  );
};

export default Home;
