import React from "react";

const Analysis = (props) => {

    const clickHandler = () => {
        props.updateDisplay('home');
    }

    return (
    <div className="home">
    <header>
      <p className="home-header" onClick={clickHandler}>Dream Journal</p>
      <p className="analyze-header">Analyze?</p></header>
      <p className="body-text light">Analysis</p>
      </div>
    )

}

export default Analysis;