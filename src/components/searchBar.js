const SearchBar = ({
  searchRestaurant,
  findRestaurant,
  searchRestaurantHandler,
  setShowSearchSuggestion,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchRestaurant}
        onChange={(e) => {
          searchRestaurantHandler(e);
        }}
        onFocus={() => {
          setShowSearchSuggestion(true);
        }}
        onBlur={() => {
          setShowSearchSuggestion(false);
        }}
        placeholder="Search Restaurant"
      />
      <button
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
