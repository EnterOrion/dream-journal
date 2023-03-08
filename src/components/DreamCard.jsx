import React from "react";

const DreamCard = (props) => {

    return (
    <div className="card">
     <div class="ribbon">
    <span class="ribbon3">{props.date}</span>
    </div>
    <p>{props.dream}</p>
    <button>Read more</button>
    </div>
    )
}

export default DreamCard