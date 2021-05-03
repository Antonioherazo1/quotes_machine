import QuoteBox from "./quoteBox";
import "./App.css";
import { useState } from "react";
import quotes from "./quotes";
import colors from "./colors";


export default function App() {
  var initQuote = Math.floor(Math.random() * 101);
  const [color, setColor] = useState('#6d72a');
  const [quote, setQuote] = useState(quotes[initQuote]);
  

  const handleQuote = () => {
    var index = Math.floor(Math.random() * 101);
    var indexColor = Math.floor(Math.random() * (colors.length+1));
    console.log(colors[indexColor]);
    setQuote(quotes[index]);    
    setColor(colors[indexColor]);
  };


  return (
    <div className="App">
      <QuoteBox quote={quote} func = {()=>{handleQuote()}} color = {color}>
      </QuoteBox>

    </div>
  );
}
