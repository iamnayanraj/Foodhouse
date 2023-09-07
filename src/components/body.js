import { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard";
import SearchBar from "./searchBar";
import {
  LATTITUDE,
  LONGITUDE,
  RES_LIST_BASE_URL,
  SEARCH_DISH_URL,
} from "../config";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import SearchSuggestion from "./searchSuggestion";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchSuggestion, setsearchSuggestion] = useState([]);
  const [showSearchSuggestion, setShowSearchSuggestion] = useState(false);

  const isOnline = useOnline();

  useEffect(() => {
    getRestaurantList();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getsearchSuggestions();
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchRestaurant]);

  const getsearchSuggestions = async () => {
    const data = await fetch(SEARCH_DISH_URL + searchRestaurant);
    const json = await data.json();
    setsearchSuggestion(json?.data?.suggestions);
  };

  const getRestaurantList = async () => {
    const data = await fetch(
      `${RES_LIST_BASE_URL}lat=${LATTITUDE}&lng=${LONGITUDE}`
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
  if (!isOnline) return <h3>No Internet 😔</h3>;
  // if (!filteredRestaurantList) return <h3>No Resturant Found</h3>;
  return (
    <>
      <SearchBar
        searchRestaurant={searchRestaurant}
        findRestaurant={findRestaurant}
        searchRestaurantHandler={searchRestaurantHandler}
        setShowSearchSuggestion={setShowSearchSuggestion}
      />

      {showSearchSuggestion && searchSuggestion && (
        <SearchSuggestion searchSuggestion={searchSuggestion} />
      )}

      <div className="restaurant-list">
        {filteredRestaurantList?.map((restaurant) => {
          return (
            <Link
              className="link"
              to={`/restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <RestaurantCard
                name={restaurant?.info?.name}
                address={
                  restaurant?.info?.locality +
                  " , " +
                  restaurant?.info?.areaName
                }
                imgId={restaurant?.info?.cloudinaryImageId}
                rating={restaurant?.info?.avgRating}
                costForTwo={restaurant?.info?.costForTwo}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
