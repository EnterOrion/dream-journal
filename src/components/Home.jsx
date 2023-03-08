import React, {useContext, useEffect} from "react";
import DreamContext from "../contexts/DreamContext";
import DreamCard from "./DreamCard";

const Home = (props) => {
    const dreamContext = useContext(DreamContext);
    const { dreams, setDreams } = dreamContext;

    const clickHandler = () => {
      props.updateDisplay();
    }

    useEffect(() => {
      const dreams = JSON.parse(localStorage.getItem('items'));
      if (dreams) {
       setDreams(dreams);
      }
    }, []);

  const dreamItems = dreams.map((element) => {
          return (
            <DreamCard date={element.date} dream={element.dream} />
            )
          }
        )
      
    return ( 
        <div className="home">
          <header>
            <p>Dream Journal</p>
            <p className="analyze-header" onClick={clickHandler}>Analyze?</p></header>
            <p className="body-text light">Library</p>
          <div className="dream-cards">
            {dreamItems}
            </div>
            </div>
       )
    
       
    

}

export default Home;