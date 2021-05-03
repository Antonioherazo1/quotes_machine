import FlatButton from "./flatButton";
import TwitterIcon from "./twitterIcon";
import Quote from "./quote";
import { useState } from "react";
import quotes from "./quotes";

const MainCard = () => {
  var textQuote = quotes[0].quote;
  const [quote, setQuote] = useState(quotes[0].quote);
  const handleQuote = () => {
    var index = Math.floor(Math.random() * 100);
    var quoteItem = quotes[1];

    setQuote(quotes[2].quote);
  };

  return (
    <div className="main-card">
      <Quote quote={quote} />
      <div className=" bottom-row">
        <TwitterIcon />
        <FlatButton 
            // func = {handleQuote()} 
        />
      </div>
    </div>
  );
};

export default MainCard;
