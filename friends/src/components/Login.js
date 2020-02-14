import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ useranme: "", password: "" })

  return (
    <>
      <form>
        <input type="text" name="username" value={credentials.useranme} />
        <input type="password" name="password" value={credentials.password} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Login;