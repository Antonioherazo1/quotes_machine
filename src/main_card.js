import FlatButton from "./flatButton";
import TwitterIcon from "./twitterIcon";
import Quote from "./quote";
import { useState } from "react";
import quotes from "./quotes";

const MainCard = () => {
  
  const [quote, setQuote] = useState(quotes[0].quote);
  
  const handleQuote = () => {
    var index = Math.floor(Math.random() * 100);
    // setQuote(quotes[index].quote);
    setQuote(quotes[index]);
    console.log(quotes[index].quote);
  }

  return (
    <div className="main-card">
      <Quote quote={quote} />
      <div className=" bottom-row">
        <TwitterIcon />
        <FlatButton func = {()=>{handleQuote()}}/>
      </div>
    </div>
  );
};

export default MainCard;
