import React, {useContext} from "react";
import DreamContext from "../contexts/DreamContext";

const DreamCard = (props) => {
    const dreamContext = useContext(DreamContext);
    const { removeDream} = dreamContext;
    const handleDelete = (e) => {
        removeDream(e.target.value);
     
    }

    return (
    <div className="card">
     <div className="ribbon">
    <span className="ribbon3">{props.date}</span>
    </div>
    <p>{props.dream}</p>
    <button className="read-more">Read more</button>
    <button className="read-more" value={props.id} onClick={handleDelete}>Delete Entry</button>
    </div>
    )
}

export default DreamCard