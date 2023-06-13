import { useState } from "react";
import { signInWithGithub, signInWithGoogle } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  if (localStorage.getItem("loggedin") == "true") {
    navigate("/account");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successMsg, setSuccessMsg] = useState(false);
  const [errorPasswordMsg, setErrorPasswordMsg] = useState(false);

  const [errorUserMsg, setUserMsg] = useState(false);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const email = result.user.email;
        //@ts-ignore
        localStorage.setItem("email", email);
        localStorage.setItem("loggedin", "true");

        setSuccessMsg(true);

        setTimeout(() => {
          setSuccessMsg(false);
        }, 3000);

        setTimeout(() => {
          navigate("/account");
        }, 4000);
      })
      .catch((error) => {
        if (error.code == "auth/wrong-password") setErrorPasswordMsg(true);
        if (error.code == "auth/user-not-found") setUserMsg(true);
      });
  };

  return (
    <div className="w-full h-screen bg-[#f2f2f2]">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 rounded-sm bg-white w-96 h-112 shadow-lg">
        <h1 className="text-center text-3xl text-black absolute -top-14 left-1/2 -translate-x-1/2">
          Login
        </h1>
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-28 w-max text-xl bg-lime-400 rounded border-8 border-lime-400"
          style={{
            display: successMsg ? "block" : "none",
          }}
          onClick={() => setSuccessMsg(false)}
        >
          <h1 className="text-black">Signed in!</h1>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-28 w-max text-xl bg-red-500 rounded border-8 border-red-500"
          style={{
            display: errorPasswordMsg ? "block" : "none",
          }}
          onClick={() => setErrorPasswordMsg(false)}
        >
          <h1 className="text-black">Error! Wrong password!</h1>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-28 w-max text-xl bg-red-500 rounded border-8 border-red-500"
          style={{
            display: errorUserMsg ? "block" : "none",
          }}
          onClick={() => setUserMsg(false)}
        >
          <h1 className="text-black">Error! User not found!</h1>
        </div>
        <div
          onClick={signInWithGoogle}
          className="w-44 h-11 bg-white rounded-sm shadow-xl cursor-pointer absolute left-1/2 -translate-x-1/2 top-1"
        >
          <div className="absolute mt-1 ml-1 w-10 h-10 rounded-sm bg-white">
            <img
              className="absolute mt-2 ml-3 w-5 h-5"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="float-right mt-3 ml-3 mb-0 mr-2 text-sm text-black">
            Sign in with Google
          </p>
        </div>
        <div
          onClick={signInWithGithub}
          className="w-44 h-11 bg-white rounded-sm shadow-xl cursor-pointer mt-2 absolute left-1/2 -translate-x-1/2 top-12"
        >
          <div className="absolute mt-1 ml-1 w-10 h-10 rounded-sm bg-white">
            <img
              className="absolute mt-2 ml-3 w-5 h-5"
              src="/github-mark.svg"
            />
          </div>
          <p className="float-right mt-3 ml-3 mb-0 mr-2 text-sm text-black">
            Sign in with GitHub
          </p>
        </div>
        <h1 className="text-center text-xl absolute left-1/2 -translate-x-1/2 top-28">
          OR
        </h1>
        <div className="bg-white rounded absolute left-1/2 -translate-x-1/2 top-36">
          <input
            type="email"
            placeholder="Email"
            className="text-black border-b-2 pb-3 focus:outline-none"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Password"
            className="text-black pt-3 focus:outline-none"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button
            className="text-white text-center w-32 bg-black mb-3 rounded mt-3 ml-14"
            onClick={login}
          >
            Login
          </button>
          <h1
            className="text-black text-center text-sx cursor-pointer"
            onClick={() => navigate("/password")}
          >
            Forgot password?
          </h1>
        </div>
        <h1 className="text-center text-xl absolute left-1/2 -translate-x-1/2 top-82">
          OR
        </h1>
        <a
          href="/signup"
          className="absolute left-1/2 -translate-x-1/2 top-[calc(320px+30px)] w-max text-2xl"
        >
          Create new Account
        </a>
        <h1 className="absolute -top-8 left-1/2 -translate-x-1/2">
          {localStorage.getItem("email")}
        </h1>
      </div>
    </div>
  );
}

export default Login;
