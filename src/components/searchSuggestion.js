const SearchSuggestion = ({ searchSuggestion }) => {
  return (
    <div className="suggestion-box">
      <ul>
        {searchSuggestion?.map((suggestion) => {
          return <li key={suggestion.text}>{suggestion.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchSuggestion;
