import { useContext, useState } from "react";
import { LOGO_CDN } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
import UserContext from "../utils/UserContext";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  const changedata = () => {
    if (btnName === "Logout") {
      setBtnName("Login");
    } else {
      setBtnName("Logout");
    }
  };
  let online = useOnlineStatus();

  //Subscribing to the store

  const cartitems = useSelector((store) => store.items);

  return (
    <div className="header shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div>
        <img
          className="w-[4.8vw]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4BBNHo8J5q9AXVg_uuwmARuxeV5wzPUYMw&usqp=CAU"
          alt="hui hui"
        />
      </div>
      <div className="nav-item">
        <ul className="header2">
          <p>Online Sataus: {online ? "🔥" : "🦁"}</p>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/grocery">Grocery</Link>
          <Link
            to="/cart"
            className="flex relative items-center gap-x-2 text-2xl font-bold text-zinc-600"
          >
            Cart <FiShoppingCart />
            <span className="text-base absolute text-orange-600 left-[90%] top-[25%]">
              ({cartitems.length})
            </span>
          </Link>

          <button
            onClick={() => changedata()}
            className="px-3 py-2 rounded-md bg-slate-500"
          >
            {btnName}
          </button>
          <li>{
            data.loggedInUser ? (data.loggedInUser) : (<h1>Defult User.</h1>)
  
          }</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
