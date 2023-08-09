import { RES_IMG_BASE_URL } from "../config";

const RestaurantCard = ({ name, address, imgId, rating, costForTwo }) => {
  return (
    <div className="restaurant-card">
      <img src={RES_IMG_BASE_URL + imgId} alt="resturant_image" />
      <h2>{name}</h2>
      <h3>{address}</h3>
      <h4>{rating + " stars"}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
