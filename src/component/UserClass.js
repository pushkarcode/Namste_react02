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
    if (this.state.count !== prevState.count) {
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
    const { count, count1, name, avatar_url, location,bio,company } = this.state.UserInfo;
    return (
      <div className="w-[100vw] h-[50vh]  flex p-5 items-start gap-x-[16vw] justify-center mt-20">
        <div className="w-1/4 flex flex-col gap-y-2">
          <h1 className="text-3xl font-light text-zinc-500 tracking-tighter">{name}</h1>
          <h1 className="text-xl font-medium text-zinc-600">{company}</h1>
          <p className="font-medium text-lg text-zinc-600">{location}</p>
          <h2 className="text-xl font-extralight leading-5">{bio}</h2>
          <a href="https://github.com/pushkarcode" target="_blank" rel="noopener noreferrer">Contact Me.</a>
        </div>

        <div className="">
          <img className="w-[20vw] object-cover rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] " src={avatar_url} alt="" />
        </div>
      </div>
    );
  }
}

export default UserClass;
