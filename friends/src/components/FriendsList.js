import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

const FriendsList = props => {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("Axios GET", res)
        setFriends(res.data)
      })
      .catch(error => console.log(error))
  }, [])


  return (
    <div className="friends__list">
      <h3>Your Friends</h3>
      {friends ? friends.map((friend, index) => (
        <div className="friend" key={index}>
          <h4>{friend.name}</h4>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      )) : (<Loader
        type="ThreeDots"
        color="salmon"
        height={100}
        width={100}
        timeout={3000} />)}
    </div>
  )
}

export default FriendsList;