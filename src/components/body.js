import { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard";
import SearchBar from "./searchBar";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.7486689&lng=84.3807025&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData?.data?.cards);
    setRestaurantList(
      jsonData?.data?.cards[4]?.card.card.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurantList(
      jsonData?.data?.cards[4]?.card.card.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const searchRestaurantHandler = (e) => {
    setSearchRestaurant(e.target.value);
  };

  const findRestaurant = () => {
    const list = restaurantList?.filter((filteredRestaurant) => {
      return filteredRestaurant?.info?.name
        ?.toLowerCase()
        .includes(searchRestaurant?.toLocaleLowerCase());
    });

    setFilteredRestaurantList(list);
  };
  return (
    <>
      <SearchBar
        searchRestaurant={searchRestaurant}
        findRestaurant={findRestaurant}
        searchRestaurantHandler={searchRestaurantHandler}
      />
      <div className="restaurant-list">
        {filteredRestaurantList?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant?.info?.id}
              name={restaurant?.info?.name}
              address={
                restaurant?.info?.locality + " , " + restaurant?.info?.areaName
              }
              imgId={restaurant?.info?.cloudinaryImageId}
              rating={restaurant?.info?.avgRating}
              costForTwo={restaurant?.info?.costForTwo}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
