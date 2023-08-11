import { useEffect, useState } from "react";
import { RES_MENU_BASE_URL } from "../config";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setresMenu] = useState(null);

  const { id } = useParams();
  console.log(resMenu);
  const getMenuDetils = async () => {
    const res = await fetch(RES_MENU_BASE_URL + id);
    const json = await res.json();
    setresMenu(json);
  };

  useEffect(() => {
    getMenuDetils();
  }, []);

  return (
    <>
      <h1>{resMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>
      <h4>{resMenu?.data?.cards[0]?.card?.card?.info?.locality}</h4>
      <h3>
        Cuisins:{" "}
        {resMenu?.data?.cards[0]?.card?.card?.info?.cuisines.join(" ,")}
      </h3>
      <h3>
        Average Rating: {resMenu?.data?.cards[0]?.card?.card?.info?.avgRating}
      </h3>
    </>
  );
};

export default RestaurantMenu;
