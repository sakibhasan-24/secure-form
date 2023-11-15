import React, { useState } from "react";
import app from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Register() {
  const auth = getAuth(app);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    // console.log(1);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    createUserWithEmailAndPassword(auth, email, password)
      .then((users) => {
        const signInUser = users.user;
        console.log(signInUser);
        setSuccessMessage("successufully user created!");
      })
      .catch((e) => {
        console.log(e.message);
        setErrorMessage(e.message);
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-12">
        Please <span className="text-orange-500">R</span>egister
      </h1>
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col my-2 gap-4 w-3/4 mx-auto"
      >
        <input
          className="rounded-md border-2 px-4 py-6 w-full border-blue-200 focus:border-red-400 active:border-orange-400"
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
        />
        <input
          className="rounded-md border-2 px-4 py-6 w-full border-blue-200 focus:border-red-400 active:border-orange-400"
          type="password"
          name="password"
          id="password"
          placeholder="enter password"
        />
        <button className="bg-orange-500 px-6 py-4 text-white font-bold rounded-md w-1/3 mx-auto cursor-pointer">
          Register
        </button>
      </form>
      {errorMessage && (
        <p className="text-red-700 font-bold text-2xl text-center">
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p className="text-green-700 font-bold text-2xl text-center">
          {successMessage}
        </p>
      )}
    </div>
  );
}
