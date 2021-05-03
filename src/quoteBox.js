import FlatButton from "./flatbutton";
import TwitterIcon from "./twitterIcon";
import Quote from "./quote";

const QuoteBox = ({func, quote, color}) => {

  return (
    <div className="quoteBox" style={{backgroundColor: color}}>
      <Quote quote={quote}/>
      <div className=" bottom-row">
        <TwitterIcon />
        <FlatButton func = {()=>{func()}}/>
      </div>
    </div>
  );
};

export default QuoteBox;
