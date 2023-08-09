const SearchBar = ({
  searchRestaurant,
  findRestaurant,
  searchRestaurantHandler,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchRestaurant}
        onChange={(e) => {
          searchRestaurantHandler(e);
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
