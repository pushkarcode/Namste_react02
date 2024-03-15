import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import RecommendedeItemList from "./RecommendedeItemList";

const RecommendedCard = ({ data, showitem, setShowindex }) => {
  const handleClick = () => {
    setShowindex();
  };
  const { title } = data;
  return (
    <div>
      <div className="bg-zinc-200 p-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] my-4 rounded-sm">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-xl text-zinc-800 tracking-wide">
            {title} ({data.itemCards.length})
          </span>
          <span className="font-extrabold">
            <IoIosArrowDown />
          </span>
        </div>

        {showitem && <RecommendedeItemList  items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RecommendedCard;
