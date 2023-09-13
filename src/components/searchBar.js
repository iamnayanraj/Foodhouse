const SearchBar = ({
  searchRestaurant,
  findRestaurant,
  searchRestaurantHandler,
  setShowSearchSuggestion,
  showSearchSuggestion,
  setSearchRestaurant,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchRestaurant}
        onChange={(e) => {
          setShowSearchSuggestion(true);
          searchRestaurantHandler(e.target.value);
        }}
        placeholder="Search Restaurant"
      />
      {showSearchSuggestion && (
        <button
          className="signin-button"
          onClick={() => {
            setSearchRestaurant("");
            setShowSearchSuggestion(false);
          }}
        >
          ❌
        </button>
      )}
      <button
        className="signin-button"
        onClick={() => {
          findRestaurant();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
