import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Navigate, useNavigate } from "react-router-dom";
const Form = ({ isSignInPage = true }) => {
  let [data, setData] = useState({
    ...(isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">
          Welcome {!isSignInPage && "Back"}
        </div>
        <div className="text-xl font-light mb-4">
          {!isSignInPage ? "Sign in to explore more" : "Sign Up to get started"}
        </div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={() => console.log("form submitted")}
        >
          {!isSignInPage && (
            <Input
              placeholder="Enter your name"
              label="Full Name"
              name="name"
              className="mb-6 w-[50%]"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, fullName: e.target.value });
              }}
            />
          )}
          <Input
            placeholder="Enter your Email"
            label="Email address"
            name="emial"
            className="mb-6 w-[50%]"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <Input
            placeholder="Enter your Password"
            label="Password"
            name="password"
            type="password"
            className="mb-14 w-[50%]"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
          <Button
            label={isSignInPage ? "Sign In" : "Sign Up"}
            className="w-1/2 mb-2"
            type="submit"
          ></Button>
        </form>
        <div>
          {isSignInPage ? "Didn't have an account" : "Already have an account"}
          <span
            className="text-primary cursor-pointer underline-none"
            onClick={() => {
              `/users/${isSignInPage ? "sign_up" : "sign_in"}`;
            }}
          >
            {isSignInPage ? "Sign up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
