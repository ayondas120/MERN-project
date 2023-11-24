import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {


  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()
  const handleSubmit = async () => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    const response = await fetch("http://localhost:9000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials")
    }

    if (json.success) {
      navigate("/");
    }
  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

}
return (
  <div>
    <div className='container'>
      <htmlForm onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
          <input type="email" class="htmlForm-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
          <input type="password" className="htmlForm-control" id="exampleInputPassword1" name='password' onChange={onChange} value={credentials.password} />
        </div>


        <button type="submit" class="btn btn-success">Submit</button>
        <Link to="/createuser" className='m-3 btn btn-danger'>I am a new user?</Link>
      </htmlForm>
    </div>
  </div>
)

export default Login
