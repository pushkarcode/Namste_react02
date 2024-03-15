import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLable } from "./ResurtantCard";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [fiterdatalist, setFiterdatalist] = useState([]);
  const [searchtext, setSearchtext] = useState(" ");
  const [dummmy, setDummmy] = useState(" ");

  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);
  const { setUsername, loggedInUser } = useContext(UserContext);

  // * API calls CORS

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6905212&lng=75.8316064&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let raw = await data.json();

    // * optinal chaning
    setlistOfRestaurants(
      raw?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiterdatalist(
      raw?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    let info =
      raw?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="w-[100vw] h-[100vh] flex justify-center items-center font-light text-5xl tracking-tighter leading-none">
        Look like you're offline🦁
      </h1>
    );

  const applyHandler = () => {
    setUsername(dummmy);
    setDummmy("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const searchTextLowerCase = searchtext.trim().toLowerCase();
      const filterdata = listOfRestaurants.filter(({ info }) =>
        info.name.toLowerCase().includes(searchTextLowerCase)
      );
      setFiterdatalist(filterdata);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Simmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-evenly mb-6">
        <div className="flex items-center gap-x-4 p-4">
          <input
            className="outline-none border-[1px] text-zinc-900 border-zinc-400 px-5 py-1 mr-4 rounded-md"
            type="text"
            data-testid="searchInput"
            onChange={(e) => setSearchtext(e.target.value)}
            onKeyDown={handleKeyDown}
            value={searchtext}
            placeholder="search anything..."
          />
          <button
            className="px-3 py-1 bg-slate-500 text-slate-200 text-lg font-light rounded-md hover:bg-slate-400 transition-all ease-linear"
            onClick={() => {
              const searchTextLowerCase = searchtext.trim().toLowerCase();
              const filterdata = listOfRestaurants.filter(({ info }) =>
                info.name.toLowerCase().includes(searchTextLowerCase)
              );
              setFiterdatalist(filterdata);
            }}
          >
            search
          </button>
          {/* //userName  */}

          <input
            className="outline-none border-[1px] text-zinc-900 border-zinc-400 px-5 py-1
            ml-12 rounded-md"
            type="text"
            value={dummmy}
            onChange={(e) => setDummmy(e.target.value)}
            placeholder="enter username..."
          />
          <button
            onClick={() => applyHandler()}
            className="px-3 py-1 bg-slate-500 text-slate-200 text-lg font-light rounded-md hover:bg-slate-400 transition-all ease-linear"
          >
            apply
          </button>
        </div>
        <button
          className="px-3 py-1 rounded-lg text-zinc-100 bg-zinc-500 font-medium text-md hover:bg-zinc-700 hover:text-zinc-50 transition-all ease-linear"
          onClick={() => {
            const filter = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFiterdatalist(filter);
          }}
        >
          Top Reated Restaurant
        </button>
      </div>
      <div className="res-container w-full h-full flex flex-wrap flex-row justify-center gap-16 bg-[#FFFFFF]">
        {fiterdatalist.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* // if the reastarunt pramoted then add a lable on it  */}

            {/* {restaurant.data ? (
                <RestaurantCardPromoted resData={restaurant}/>
               ) : (
                <RestaurantCard resData={restaurant} />
               )} */}

            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
