import React, { useContext } from "react";
import DreamContext from "../contexts/DreamContext";

const Analysis = (props) => {
  const dreamContext = useContext(DreamContext);
  const { dreams } = dreamContext;
  let freqMap = {};
  let freqWords = [];

  const nonSignificantWords = [
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
    "I",
    "very",
  ];

  const clickHandler = () => {
    props.updateDisplay("home");
  };

  function wordFreq(string) {
    let words = string.replace(/[.]/g, "").split(/\s/);
    words.forEach(function (w) {
      for (let word of nonSignificantWords) {
        // Filter out nonsignificant words
        if (w == word) {
          return;
        }
      }
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      // Increase by one for each instance of the word found
      freqMap[w] += 1;

      // If it has showed up more than five times, display in analysis
      if (freqMap[w] > 5) {
        if (!freqWords.includes(w)) freqWords.push(w);
      }
    });
  }

  for (let dream of dreams) {
    wordFreq(dream.dream);
  }

  // Maps reoccurring symbols to a list
  const dreamItems = freqWords.map((element) => {
    return (
      <ul>
        <li>{element}</li>
      </ul>
    );
  });

  return (
    <div className="analyze">
      <header>
        <p className="home-header" onClick={clickHandler}>
          Dream Journal
        </p>
        <p className="analyze-header">Analyze?</p>
      </header>
      <p className="body-text light more-padding">Analysis</p>

      <div className="body-text black-border">
        <p className="analysis-header">Most Frequent Symbols:</p>
        {dreamItems}
      </div>
    </div>
  );
};

export default Analysis;
