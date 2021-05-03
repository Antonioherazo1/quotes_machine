const Quote = ({ quote}) => {
    return (
      <div className="quote">
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
      </div>
    );
  };
  
  export default Quote;
  