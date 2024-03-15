import React, { useEffect, useState } from "react"
const User = ({name}) => {
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(27)

    useEffect(() => {
     // Api call
     
    },[])
  return (
    <div className="">
     <h2>Nmae: {name}-{count}-{count1}</h2>
     <h3>Location: Indore</h3>
     <h4>Conatct: itspushkarsharma</h4>
    </div>
  );

}
export default User;