import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";
import { Card, Button } from "semantic-ui-react";

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
    <>
      <h2>Your Friends</h2>
      <div className="friends__list">

        {friends ? friends.map((friend, index) => (
          <Card className="friend" key={index}>
            <Card.Content>
              <Card.Header>{friend.name}</Card.Header>
              <Card.Meta>Age: {friend.age}</Card.Meta>
              <Card.Description>Email: {friend.email}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Edit
          </Button>
                <Button basic color='red'>
                  Delete
          </Button>
              </div>
            </Card.Content>
          </Card>
        )) : (<Loader
          type="ThreeDots"
          color="salmon"
          height={100}
          width={100}
          timeout={3000} />)}
      </div>
    </>
  )
}

export default FriendsList;