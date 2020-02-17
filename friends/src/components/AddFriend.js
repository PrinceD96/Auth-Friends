import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" })

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true)
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', friend)
      .then(res => {
        console.log("Add Friend", res)
        setFriend({
          name: '',
          age: '',
          email: ''
        })
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={friend.name} onChange={handleChange} placeholder="Enter Name" required />
        <input type="number" name="age" value={friend.age} onChange={handleChange} placeholder="Enter Age" required />
        <input type="email" name="email" value={friend.email} onChange={handleChange} placeholder="Enter Email" required />
        <button type="submit">Add Friend</button>
      </form>
    </>
  )

}

export default AddFriend;
