import React, { useState } from "react";
import axios from "axios";

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
    <>
      {isLoading ? (<h2>Loading...</h2>) : (
        <form onSubmit={handleLogin}>
          <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  )
}

export default Login;