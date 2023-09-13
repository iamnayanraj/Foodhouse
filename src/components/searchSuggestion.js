const SearchSuggestion = ({
  searchSuggestion,
  searchRestaurantHandler,
  setShowSearchSuggestion,
  findRestaurant,
}) => {
  return (
    <div className="suggestion-box">
      <ul>
        {searchSuggestion?.map((suggestion) => {
          return (
            <li
              key={suggestion.text}
              className="link"
              onClick={() => {
                searchRestaurantHandler(suggestion.text);
                findRestaurant();
                setShowSearchSuggestion(false);
              }}
            >
              {suggestion.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchSuggestion;
