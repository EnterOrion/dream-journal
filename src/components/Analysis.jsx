import React, {useContext} from "react";
import DreamContext from "../contexts/DreamContext";

const Analysis = (props) => {
  const dreamContext = useContext(DreamContext);
  const { dreams } = dreamContext;
  let freqMap = {};
  let freqWords = [];


  const nonSignificantWords =[
    "the",
    "there",
    "is",
    "by",
    "as",
    "from",
    "has",
    "at",
    "and",
    "so",
    "if",
    "than",
    "but",
    "about",
    "in",
    "on",
    "the",
    "was",
    "for",
    "that",
    "said",
    "a",
    "or",
    "of",
    "to",
    "there",
    "will",
    "be",
    "what",
    "get",
    "go",
    "think",
    "just",
    "every",
    "are",
    "it",
    "were",
    "had",
    "i",
    "very",
    ];


    const clickHandler = () => {
        props.updateDisplay('home');
    }

    function wordFreq(string) {
      let words = string.replace(/[.]/g, '').split(/\s/);
      words.forEach(function(w) {
        for (let word of nonSignificantWords) {
          if (w == word) {
            return;
          }
        }
          if (!freqMap[w]) {
              freqMap[w] = 0;
          }
          freqMap[w] += 1;
          if (freqMap[w] > 5) 
          {
            if (!freqWords.includes(w))
            freqWords.push(w);
          }
      });
      
      
  }

    for (let dream of dreams) {
      wordFreq(dream.dream);
    }

    const dreamItems = freqWords.map( (element) => {
    
      return (
          <ul>
            <li>{element}</li>
          </ul>

        )
      })
      

    return (
    <div className="home">
    <header>
      <p className="home-header" onClick={clickHandler}>Dream Journal</p>
      <p className="analyze-header">Analyze?</p></header>
      <p className="body-text light">Analysis</p>
      
      <div className="body-text black-border"><p className="analysis-header">Most Frequent Symbols</p>{dreamItems}</div>
      </div>
    )

}

export default Analysis;