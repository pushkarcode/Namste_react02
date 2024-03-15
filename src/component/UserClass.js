import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // * recvied props
    super(props);

    // ! creating state variable inside class component

    this.state = {
      count: 27,
      count1: 0,
      UserInfo: {
        name: "user",
        loaction: "dummmy",
      },
    };
    console.log("child constructer");
  }

  // ! for normal use
  // componentDidMount() {
  //   console.log("chils did mount");
  // // make a api call
  // }
  // * for api call



  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/pushkarcode");
    let raw = await data.json();

    this.setState({
      UserInfo: raw,
    });

    console.log(raw);
   
    }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count) {


    // ! code 
    }

    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");

  }

  

  render() {
    console.log("child render");
    // const { name, location,p } = this.props;
    const { count, count1, name, avatar_url, location } = this.state.UserInfo;
    return (
      <div>
        <h1>{name}</h1>
        <p>{location}</p>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}

export default UserClass;
