import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import RestaurantCard from "./component/ResurtantCard";
import Body from "./component/Body";
import resList from "./utils/mockdata";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import RestrunatMenu from "./component/RestrunatMenu";
import Simmer from "./component/Simmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

// import Grocery from "./component/Grocery";

//React Element
// const heading = React.createElement("h1", { id: "Heading" }, "fire hai mai🔥");

// * JSX Element

// const jsxheading = <h1 id="heading">this is jsx</h1>;

// const header = React.createElement("div", {className: "title"}, <h1>"golu aj to bhagwan yaad aa gye"</h1>);

//functional component
// const Title = () => (
// <div>
//    {elem}
//   <p>hello golu or padhna hai</p>
//   </div>

// );

// const HeadingComponent = () => (
//   <div>
//    {Title()}
//     <h1 className="heading">Namste react functional Component</h1>
//   </div>
// );

// const data = React.createElement("div", { className : "title" },
//    "evrything inside a div",
//       React.createElement("h1", {id: "heading"}, "header 1"),
//       React.createElement("h1", {id: "heading"}, "header 2"),
//       React.createElement("h1", {id: "heading"}, "header 2")

// );

// const Comp = () => (
//   <div>
//     <h1>header 1</h1>
//     <h2>header 2</h2>
//     <h3>header 3</h3>
//   </div>
// );
// const Comp1 = () => (
//   <div>
//     {Comp()}
//     <p>golu now you're happy</p>
//     <Header/>
//   </div>
// );

// ! BUilding food ordering app

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));

//authenticaltion code'

const AppLayout = () => {
  const [username, setUsername] = useState();
  useEffect(() => {
    const data = {
      name: "",
    };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<p>Loading golu...</p>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Simmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestrunatMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
