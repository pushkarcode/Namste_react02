import React from "react";
import { DATA_CDN } from "../utils/constant";
import noimg from "../../Public/noimg.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const RecommendedeItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAdditem = (items) => {
    // ? Dispatch the action
    dispatch(addItem(items))

  }
  
  return (
    <div>
      {items.map((items) => (
        <div className="flex items-center justify-between p-2 mb-6 border-b-[1.4px] border-zinc-400" key={items?.card?.info?.id}>
        <div className="flex flex-col gap-1">
          <h1 className="text-md font-semibold text-zinc-700">{items?.card?.info?.name}</h1>
          <p className="text-sm">
            ₹ {items?.card?.info?.price / 100} -{" "}
            <span className="text-zinc-700 text-md font-medium">
              {items?.card?.info?.category}
            </span>
          </p>
          <h3 className="text-zinc-400 text-[1vw] w-[30vw]">{items?.card?.info?.description}</h3>
        </div>
        <div className="relative">
         {items?.card?.info?.imageId ? ( <img
            className="w-[8vw] h-[14vh] object-cover rounded-lg"
            src={DATA_CDN + items?.card?.info?.imageId}
            alt=""
          />) : (
            <img
            className="w-[8vw] h-[14vh] object-cover rounded-lg"
            src={noimg}
              />
          ) }

          <button onClick={() => handleAdditem(items)} className="absolute top-[76%] left-[26%] px-2 py-[1px] bg-zinc-300 rounded-lg text-lg font-light text-red-500 shadow-lg">Add +</button>
        </div> 
        </div>
      ))}
    </div>
 
  );
};

export default RecommendedeItemList;
