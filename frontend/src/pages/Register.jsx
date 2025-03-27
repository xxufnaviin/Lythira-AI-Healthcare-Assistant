import React, { useEffect, useState, useRef } from 'react'
import Footer from "../components/Footer"

const Register = ({isRegister}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(isRegister ? "Registering" : "Signing In", formData);
  };

  return (
    <>
      <div className='content'>
      <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">
          {isRegister ? "Create an Account" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="auth-input"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="auth-input"
            autoComplete='off'
            onInvalid={(e) => e.preventDefault()}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="auth-input"
            required
          />
          {isRegister && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="auth-input"
              required
            />
          )}
          {!isRegister && (
            <div className="auth-forgot">Forgot Password?</div>
          )}
          <button type="submit" className="auth-button">
            {isRegister ? "Register" : "Sign In"}
          </button>
        </form>
        <div className="auth-switch">
          {isRegister ? "Already have an account?" : "Don't have an account?"} 
          <a href={isRegister ? "/signin" : "/register"} className="auth-link"> 
            {isRegister ? "Sign In" : "Register"} 
          </a>
        </div>
      </div>
    </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Register