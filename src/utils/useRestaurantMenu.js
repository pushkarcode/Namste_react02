import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  // ? fetching data

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(MENU_API + resId);
    let raw = await data.json();

    setResInfo(raw.data);
  };

  return resInfo;
};
export default useRestaurantMenu; // deprecated
