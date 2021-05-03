  const Quote = ({ quote, color}) => {
    return (
      <div className="quote" style={{backgroundColor: color}} >      
        <p>{quote.quote}</p>
        <p>{quote.author}</p>      
      </div>
    );
  };
  
  export default Quote;
  
  