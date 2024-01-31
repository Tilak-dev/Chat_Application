import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
   const handleOnSubmit = (event) => {
      event.preventDefault();
      validation();
   };

   const [value, setValue] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
   });
   const handleOnChange = (e) => {
      setValue({
         ...value,
         [e.target.name]: e.target.value,
         position: "bottom-right",
         autoClose: 8000,
         pauseOnHover: true,
         draggable: true,
         theme: "dark",
      });
   };

   const validation = () => {
      const { password, confirmPassword, username, email } = value;
      if (password !== confirmPassword) {
         toast.error("Password and Confirm Password should be same !", {
            position: "bottom-right",
         });
      }
   };

   return (
      <>
         <FormContainer>
            <form onSubmit={(event) => handleOnSubmit(event)}>
               <div className="brand">
                  <img src={logo} alt="logo" />
                  <h1>snappy</h1>
               </div>
               <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => handleOnChange(e)}
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Email here"
                  onChange={(e) => handleOnChange(e)}
               />
               <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => handleOnChange(e)}
               />
               <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confinm Password"
                  onChange={(e) => handleOnChange(e)}
               />
               <button type="submit">Sign up</button>
               <span>
                  Already have an account <Link to="/login"> Login here</Link>
               </span>
            </form>
         </FormContainer>
         <ToastContainer />
      </>
   );
}

const FormContainer = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1rem;
   align-items: center;
   background-color: #131324;
   .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      img {
         height: 5rem;
      }
      h1 {
         color: white;
         text-transform: uppercase;
      }
   }

   form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: #00000076;
      border-radius: 2rem;
      padding: 3rem 5rem;
   }
   input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
         border: 0.1rem solid #997af0;
         outline: none;
      }
   }
   button {
      background-color: #4e0eff;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
         background-color: #4e0eff;
      }
   }
   span {
      color: white;
      text-transform: uppercase;
      a {
         color: #4e0eff;
         text-decoration: none;
         font-weight: bold;
      }
   }
`;

export default Signup;
