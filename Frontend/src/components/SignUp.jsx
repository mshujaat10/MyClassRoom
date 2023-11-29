import React, { useState } from 'react'
import googleImg from '../assets/google.png'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [Credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", phone: "", password: "" })
    const { firstname, lastname, email, phone, password } = Credentials;
    const Navigate = useNavigate();

    const OnChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:5000/auth/createuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstname, lastname, email, phone, password })
        })
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("Token", json.authToken)
            Navigate('/')
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <div className="container signIn-main d-flex flex-column justify-content-center">
            <div className="container border pt-4 px-5 w-50 rounded-3">
                <div>
                    <div className='text-center pt-1'>
                        <img src={googleImg} width={'75px'} />
                        <h4>Create Your Google Account</h4>
                        <p>Enter Your Name</p>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="firstname" placeholder="Firstname" name='firstname' value={firstname} onChange={OnChange} />
                        <label htmlFor="firstname">Firstname</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="lastname" placeholder="Lastname" name='lastname' value={lastname} onChange={OnChange} />
                        <label htmlFor="lastname">Lastname</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="Email or phone" name='email' value={email} onChange={OnChange} />
                        <label htmlFor="email">Email or phone</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="phone" placeholder="phone" name='phone' value={phone} onChange={OnChange} />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" name='password' value={password} onChange={OnChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className='d-flex justify-content-between me-1'>
                        <button className="btn btn-primary rounded-0 p-button2 fw-semibold" onClick={handleSubmit}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup