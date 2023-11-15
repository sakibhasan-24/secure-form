import {
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useRef } from "react";
import app from "./firebase.config";

export default function Login() {
  const auth = getAuth(app);
  const userEmail = useRef(null);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((loggedUser) => {
        console.log(loggedUser.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const handleForgetPassword = () => {
    console.log("clicked");
    const email = userEmail.current.value;
    if (!email) {
      alert("enter valid email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => alert("check your email"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleLogIn}
        className="flex flex-col my-2 gap-4 w-3/4 mx-auto"
      >
        <input
          className="rounded-md border-2 px-4 py-6 w-full border-blue-200 focus:border-red-400 active:border-orange-400"
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
          ref={userEmail}
        />
        <input
          className="rounded-md border-2 px-4 py-6 w-full border-blue-200 focus:border-red-400 active:border-orange-400"
          type="password"
          name="password"
          id="password"
          placeholder="enter password"
        />
        <button
          onClick={handleForgetPassword}
          className="bg-yellow-500 text-black font-bold px-6 py-4"
        >
          Forget password
        </button>
        <button className="bg-orange-500 px-6 py-4 text-white font-bold rounded-md w-1/3 mx-auto cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}
