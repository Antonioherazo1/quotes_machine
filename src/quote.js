const Quote = ({ quote, author }) => {
    return (
      <div className="quote">
        <p>{quote}</p>
        <p>{author}</p>
      </div>
    );
  };
  
  export default Quote;
  