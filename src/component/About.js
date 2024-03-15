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
      <div className="p-10">
        <h2>Learn from the best teacher in </h2>
        <div className="felx">
          LoggedIn user :
         <UserContext.Consumer>
        {(({loggedInUser}) => <span>{loggedInUser ? (loggedInUser) : (<span>Default User</span>)}</span> )}
         </UserContext.Consumer>
        </div>
        {/* <User name="pushkar from function"/> */}
        <UserClass name={"pushkar from class"} location={"indore class"} />
      </div>
    );
  }
}

export default About;
