import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends React.Component {
  constructor(props) {
    super(props);
    
    console.log("parent constructer")
  }

   componentDidMount() {
    console.log("parent did mount");
   }


  render() {
    console.log("parent render");
    return (
      <div className="overflow-x-hidden p-10 ml-3">
        <h2 className="font-light text-5xl text-zinc-600 mb-3">About Us.</h2>
        <div className="felx text-xl text-zinc-500 font-thin">
          LoggedIn user :
         <UserContext.Consumer>
        {(({loggedInUser}) => <span>{loggedInUser ? (loggedInUser) : (<span> Default User</span>)}</span> )}
         </UserContext.Consumer>
        </div>
        {/* <User name="pushkar from function"/> */}
        <UserClass name={"pushkar from class"} location={"indore class"} />
      </div>
    );
  }
}

export default About;
