import React from "react";
import AddFriend from "./AddFriend";
import FriendsList from "./FriendsList";

const Profile = () => {
  return (
    <>
      <h2>Welcome Back!</h2>
      <AddFriend />
      <FriendsList />
    </>
  )
}

export default Profile;