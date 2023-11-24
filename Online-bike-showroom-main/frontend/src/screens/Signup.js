import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    const handleSubmit = async () => {
        e.preventDefault();
        console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))
        const response = await fetch("http://localhost:9000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials")
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (

        <>
            <div className='container'>
                <htmlForm onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="htmlForm-label">Name</label>
                        <input type="name" class="htmlForm-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
                        <input type="email" class="htmlForm-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                        <input type="password" className="htmlForm-control" id="exampleInputPassword1" name='password' onChange={onChange} value={credentials.password} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="htmlForm-label">Address</label>
                        <input type="text" className="htmlForm-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user?</Link>
                </htmlForm>
            </div>
        </>
    )
}