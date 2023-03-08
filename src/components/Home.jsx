import React, {useContext} from "react";
import DreamContext from "../contexts/DreamContext";
import DreamCard from "./DreamCard";

const Home = () => {
    const dreamContext = useContext(DreamContext);
    const { dreams } = dreamContext;

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
            <p>Analyze?</p></header>
          <div className="dream-cards">
            {dreamItems}
            </div>
            </div>
       )
    
       
    

}

export default Home;