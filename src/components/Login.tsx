import { motion } from "framer-motion";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";

import Navbar from "./sections/Navbar";
import Bottom from "./sections/Bottom";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 20 }}>
        <Navbar />
      </motion.div>
      <div className="align-middle text-center translate-y-64">
        <div className="mb-44 text-2xl">
          <h3 className="">Login</h3>
          <input
            className="absolute left-1/2 -translate-x-1/2 top-14 rounded text-black"
            placeholder="Email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            className="absolute left-1/2 -translate-x-1/2 top-24 rounded text-black"
            placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button
            className="absolute left-1/2 -translate-x-1/2 top-36 bg-whoiam border-4 rounded border-whoiam text-3xl"
            onClick={login}
          >
            Login
          </button>
        </div>
        <h1 className="text-3xl">OR</h1>
        <div className="mb-44 text-2xl">
          <h3 className="">Sign up</h3>
          <input
            className="absolute left-1/2 -translate-x-1/2 top-72 rounded text-black"
            placeholder="Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            className="absolute left-1/2 -translate-x-1/2 top-82 rounded text-black"
            placeholder="Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button
            className="absolute left-1/2 -translate-x-1/2 top-92 bg-whoiam border-4 rounded border-whoiam text-3xl"
            onClick={register}
          >
            Create user
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 top-102">
            User logged in:
            <span> {auth.currentUser?.email}</span>
          </h1>
          <button
            className="absolute left-1/2 -translate-x-1/2 top-112 bg-whoiam border-4 rounded border-whoiam text-3xl"
            onClick={logout}
          >
            Sign out
          </button>
        </div>
      </div>
      <Bottom />
    </>
  );
}

export default Login;
