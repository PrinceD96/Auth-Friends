import React from "react";
import AddFriend from "./AddFriend";
import FriendsList from "./FriendsList";

const Profile = () => {
  return (
    <>
      <h1>Welcome Back!</h1>
      <AddFriend />
      <FriendsList />
    </>
  )
}

export default Profile;