import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Form, Input, Button } from "semantic-ui-react";

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
    <div className="addFriend__form__container">
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            id='form-input-control-name'
            control={Input}

            placeholder='Enter name'
            name="name"
            value={friend.name}
            onChange={handleChange}
          />
          <Form.Field
            id='form-input-control-age'
            control={Input}
            type="number"

            placeholder='Enter age'
            name="age"
            value={friend.age}
            onChange={handleChange}
          />
          <Form.Field
            id='form-input-control-email'
            control={Input}

            placeholder='Enter email'
            name="email"
            value={friend.email}
            onChange={handleChange}
          />
          <Form.Field
            id='form-button-submit'
            control={Button}
            content='Add Friend'
          />
        </Form.Group>
      </Form>
    </div>
  )

}

export default AddFriend;
