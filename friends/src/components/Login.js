import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Segment, Form, Input, Button } from "semantic-ui-react";

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleLogin = e => {
    e.preventDefault();
    setIsLoading(true)
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/profile")
        setIsLoading(false);
        console.log("Axios POST", res)
        console.log("Route Props", props)
      })
      .catch(error => {
        localStorage.removeItem("token");
        setIsLoading(false)
        console.log("Invalid login", error)
      })
    console.log("Form Submitted")
    setCredentials({ username: "", password: "" })
  }

  return (
    <div className="login__form__container">
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="salmon"
          height={100}
          width={100}
          timeout={3000} />
      )
        : (
          <>
            <h2>Login</h2>
            <Segment>
              <Form onSubmit={handleLogin} className="login__form">
                <Input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" required />
                <Input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
                <Button type="submit">Submit</Button>
              </Form>
            </Segment>
          </>
        )}
    </div>
  )
}

export default Login;