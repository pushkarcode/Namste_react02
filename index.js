import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          width={90}
          src="https://i.pinimg.com/564x/5b/f0/a1/5bf0a10344fc57a2d66b35c72020146b.jpg"
          alt="hui hui"
        />
      </div>
      <div className="nav-item">
        <ul className="header2">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props; //destrucing data

  const {
    imageId,
    name,
    rating,
    price,
    devtime,
    category,
  } = resData?.card;

  return (
    <div className="res-card">
      <img
        id="img1"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
      />

      <h3 className="text1">{name}</h3>
      <div className="cart-start">
        <p>{rating} Stars</p>
        <p>₹{price / 100} FOR ONE</p>
        <p>{devtime} mins</p>
      </div>
      <p className="last">{category}</p>
    </div>
  );
};

const resList = [
  {
    card: {
      id: "41990033",
      name: "Kachori (Aloo) + Samosa",
      category: "indori  (Aloo) + Samosa , specialized",
      description: "Serves 1",
      imageId: "i2uh9gzj1cnhtbveix7e",
      inStock: 1,
      isVeg: 1,
      price: 4500,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
        portionSize: "Serves 1",
      },
      ribbon: {},
      showImage: true,
      itemBadge: {},
      badgesV2: {},
      rating: "4.1",
      devtime: 49,
      ratings: {
        aggregatedRating: {
          ratingCount: "282 ratings",
          ratingCountV2: "282",
        },
      },
    },
  },
  {
    card: {
      id: "41990035",
      name: "Poha + Kachori (Dal)",
      category: "Swiggy Exclusive Combos , Kachori exclusive",
      description: "Serves 1",
      imageId: "dydotowntmcbmsgicsq2",
      inStock: 1,
      isVeg: 1,
      price: 4500,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
        portionSize: "Serves 1",
      },
      ribbon: {},
      showImage: true,
      itemBadge: {},
      badgesV2: {},
      rating: "4.1",
      devtime: 27,
      ratings: {
        aggregatedRating: {
          ratingCount: "572 ratings",
          ratingCountV2: "572",
        },
      },
    },
  },
  {
    card: {
      id: "17002384",
      name: "Mathura Peda (250 gms)",
      category: "Mawe Ki Mithai",
      description: "Serves 1",
      imageId: "4b10f8547a9b61af855caea1be1dc6a9",
      inStock: 1,
      isVeg: 1,
      price: 17500,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
        portionSize: "Serves 1",
      },
      ribbon: {},
      showImage: true,
      itemBadge: {},
      badgesV2: {},
      rating: "4.3",
      devtime: 73,
      ratings: {
        aggregatedRating: {
          ratingCount: "414 ratings",
          ratingCountV2: "414",
        },
      },
    },
  },

  {
    card: {
      id: "17002385",
      name: "Kesar Peda ",
      category: "Mawe Ki Mithai",
      description: "250 gm",
      imageId: "6593b6e62eeb19832cc678c0de37a67a",
      inStock: 1,
      isVeg: 1,
      price: 17500,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
        portionSize: "250 gm",
      },
      ribbon: {
        text: "Bestseller",
        textColor: "#ffffff",
        topBackgroundColor: "#d53d4c",
        bottomBackgroundColor: "#b02331",
      },
      showImage: true,
      itemBadge: {},
      badgesV2: {},
      isBestseller: true,
      rating: "4.3",
      devtime: 25,
      ratings: {
        aggregatedRating: {
          ratingCount: "620 ratings",
          ratingCountV2: "620",
        },
      },
    },
  },

  {
    card: {
      id: "17002391",
      name: "Mawa Katli (250 gms)",
      category: "Mawe Ki Mithai",
      description: "Serves 1",
      imageId: "f5a079f00713937ed7da9c9bb0aae8c0",
      inStock: 1,
      isVeg: 1,
      price: 17500,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
        portionSize: "Serves 1",
      },
      ribbon: {},
      showImage: true,
      itemBadge: {},
      badgesV2: {},
      rating: "3.9",
      devtime: 17,
      ratings: {
        aggregatedRating: {
          ratingCount: "644 ratings",
          ratingCountV2: "644",
        },
      },
    },
  },

  {
    card: {
      id: "17002390",
      name: "Milkcake ",
      category: "Mawe Ki Mithai",
      description:
        "250 gm | | This traditional sweet is a milk fudge. Milk and sugar are cooked and then split with alum, cooled, set and cut into cubes |",
      imageId: "waun6pqxvis1msmq0owi",
      inStock: 1,
      isVeg: 1,
      price: 17000,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
        portionSize: "250 gm",
      },
      ribbon: {
        text: "Bestseller",
        textColor: "#ffffff",
        topBackgroundColor: "#d53d4c",
        bottomBackgroundColor: "#b02331",
      },
      showImage: true,
      itemBadge: {},
      badgesV2: {},
      isBestseller: true,
      rating: "4.3",
      devtime: 46,
      ratings: {
        aggregatedRating: {
          ratingCount: "1717 ratings",
          ratingCountV2: "1717",
        },
      },
    },
  },

  {
    card: {
      id: "18853142",
      name: "Bundi Laddu",
      category: "Mawe Ki Mithai",
      description:
        "250 gm | Traditional sweet dish made of besan(chickpea flour or gram flour), sugar, pure ghee and then shaped into small balls packed in box",
      imageId: "zpmcqfowm9veti1ukun3",
      inStock: 1,
      isVeg: 1,
      price: 17500,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
        portionSize: "250 gm",
      },
      ribbon: {},
      showImage: true,
      itemBadge: {},
      badgesV2: {},
      rating: "4.2",
      devtime: 16,
      ratings: {
        aggregatedRating: {
          ratingCount: "797 ratings",
          ratingCountV2: "797",
        },
      },
    },
  },

  {
    card: {
      id: "18853141",
      name: "Besan Laddu (250 gms)",
      category: "Mawe Ki Mithai",
      description: "Serves 1 | ( serves 1 )",
      imageId: "6d14b462b7879193144243d01c7fb49d",
      inStock: 1,
      isVeg: 1,
      price: 17500,
      variants: {},
      variantsV2: {},
      itemAttribute: {
        vegClassifier: "VEG",
        portionSize: "Serves 1",
      },
      ribbon: {},
      showImage: true,
      itemBadge: {},
      badgesV2: {},
      rating: "4.0",
      devtime: 36,
      ratings: {
        aggregatedRating: {
          ratingCount: "387 ratings",
          ratingCountV2: "387",
        },
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.card.id}  resData={restaurant}
            />
          ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
