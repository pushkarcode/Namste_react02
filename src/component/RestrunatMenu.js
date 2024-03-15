import React, { useState } from "react";
import Simmer from "./Simmer";
import { useNavigate, useParams } from "react-router-dom";
import { DATA_CDN } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IoMdArrowBack } from "react-icons/io";
import RecommendedCard from "./RecommendedCard";
import { MdArrowForwardIos } from "react-icons/md";

const RestrunatMenu = () => {
  const [showindex, setShowindex]  = useState(null);

  
  let nevigate = useNavigate();
  // const [resInfo, setResInfo] = useState(null);

  // * behind the seen how they extract the id we don.t know
  const { resId } = useParams();

  let resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Simmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRatingString,
    sla,
    totalRatingsString,
    veg,
    city,
  } = resInfo?.cards[0]?.card?.card?.info;
  const data =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" h-full m-10">
      <div className="px-20">
        <span
          className="cursor-pointer text-5xl text-zinc-500"
          onClick={() => nevigate(-1)}
        >
          <IoMdArrowBack />
        </span>
      </div>

      <div className="flex justify-between items-center w-1/2 mx-auto m-3 mb-8">
        <div>
          <h2 className="uppercase font-semibold text-lg tracking-wide">
            {name}
          </h2>
          <h3 className="font-normal text-sm text-zinc-400 ">
            {cuisines.join(",")}
          </h3>
          <h3 className="font-normal text-sm text-zinc-400 ">{city}</h3>
        </div>
        <div className="flex flex-col border-[1.3px] px-1 py-3 rounded-lg text-center text-zinc-400">
          <h1 className="text-zinc-500 font-bold text-lg border-b-[1px]">
            ★ {avgRatingString}
          </h1>
          <h2 className="text-sm mt-1">{totalRatingsString}</h2>
        </div>
      </div>

      <div className="w-1/2 mx-auto border-dashed border-t-[1.5px] border-b-[1.3px] border-zinc-400 flex justify-between items-center mb-12">
        <div>
          <h3 className="px-6 p-2 font-bold text-xl mb-12">
            {" "}
            > {costForTwoMessage}
          </h3>

          {/* // ? when user click on it filter veg food only */}

          <button className="px-4 py-1 ml-3 mb-10 rounded-md bg-slate-500 text-zinc-300 text-md">
            {veg}Veg
          </button>
        </div>
        <div>
          <img
            className="w-[7vw] h-[7vw] object-cover rounded-md"
            src={DATA_CDN + cloudinaryImageId}
          />
        </div>
      </div>

      <div className="w-1/2 mx-auto">
        {/* categories accordions */}

        {categories.map((category,index) => (

          // ! Controoled compoenet

          <RecommendedCard
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showitem={index === showindex && true}
            setShowindex={() => setShowindex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestrunatMenu;
