import { DATA_CDN } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props; //destrucing data

  const { cloudinaryImageId, name, avgRating, costForTwo, sla, cuisines } =
    resData?.info;

  return (
    <div
       data-testid = "resCard"
      className="w-[18vw] h-[47vh] bg-zinc-200 rounded-t-lg rounded-b-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] overflow-hidden hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] transition-all ease-linear hover:scale-105"
    >
      <img
        className="w-full h-1/2 object-cover"
        id="img1"
        src={DATA_CDN + cloudinaryImageId}
      />

      <h3 className="text1 text-center h-[3.6vw] p-2 text-xl leading-5 font-medium tracking-wide">
        {name}
      </h3>
      <div className="cart-start flex p-2 justify-between font-light">
        <p>{avgRating} Stars</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} mins</p>
      </div>
      <p className="p-1 mt-2 flex font-medium text-lg leading-5 tracking-wide">
        {cuisines}
      </p>
    </div>
  );
};

// ! Higher order compoent

// input ResaurantCard ===>  ResaurantCardPromoted

export const withPromotedLable = (ResaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
