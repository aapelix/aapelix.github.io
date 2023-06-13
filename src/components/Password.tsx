import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";

function Password() {
  const [email, setEmail] = useState("");

  const [successMsg, setSuccessMsg] = useState(false);

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMsg(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-20 w-max text-xl bg-lime-400 rounded border-8 border-lime-400"
        style={{
          display: successMsg ? "block" : "none",
        }}
      >
        <h1 className="text-black">Email sent!</h1>
      </div>
      <input
        type="email"
        className="absolute bg-transparent border-b-4 left-1/2 -translate-x-1/2 focus:outline-none"
        placeholder="Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button
        className="absolute top-8 w-max left-1/2 -translate-x-1/2"
        onClick={resetPassword}
      >
        Send reset password email
      </button>
    </div>
  );
}

export default Password;
