
import { Link } from "react-router-dom"
import React, { useRef } from "react"
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
export default function Singup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passowordRef = useRef();
  const passwordConfirmaitonRef = useRef();

  const {setUser, setToken} = useStateContext()

  const onSubmit = (ev) => {


    ev.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      passoword: passowordRef.current.value,
      password_Confirmaiton: passwordConfirmaitonRef.current.value,
    }

    axiosClient.post('/signup',payload)
    .then(({data})=>{
      setToken(data.token)
      setUser(data.user)
    })
    .catch(err =>{
      const response = err.response;
      if(response && response.status ===422) {
        console.log(response.data.errors);
      }
    })
  }

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit} >
          <h1 className="title">
            Signup for free
          </h1>
          <input ref={nameRef} placeholder="Full Name" />
          <input ref={emailRef} placeholder="Email Address" type="email" />
          <input ref={passowordRef} placeholder="Password" type="password" />
          <input ref={passwordConfirmaitonRef} placeholder="Password Confirmation" type="password" />
          <button className="btn btn-block">Signup</button>
          <p className="message">
            Already Registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}           