import { logOut, auth } from "./firebase";
import { deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  if (!localStorage.getItem("loggedin")) {
    navigate("/login");
  }

  const deleteAccount = () => {
    //@ts-ignore
    deleteUser(user)
      .then(() => {
        localStorage.removeItem("pfp");
        localStorage.removeItem("name");
        localStorage.removeItem("email");

        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="absolute left-1/2 -translate-x-1/2 top-[calc(33.333333%-30px)] w-max text-3xl">
          Email: {localStorage.getItem("email")}
        </h1>
        <h1 className="absolute left-1/2 -translate-x-1/2 top-1/3 w-max text-3xl">
          Username: {localStorage.getItem("name")}
        </h1>
        <h1 className="absolute left-1/2 -translate-x-1/2 top-[calc(33.333333%+50px)] w-max text-2xl">
          Profile picture:
        </h1>
        <img
          /* @ts-ignore */
          src={localStorage.getItem("pfp")}
          alt=""
          className="rounded-full mt-[calc(33.333333%+130px)] ml-48 w-24 h-24"
        />
        <button
          className="bg-white rounded text-black text-xl border-4 ml-4 mr-4"
          onClick={logOut}
        >
          Sign out
        </button>
        <button
          className="bg-white rounded text-black text-xl border-4 ml-4 mr-4"
          onClick={() => navigate("/password")}
        >
          Reset password
        </button>

        <button
          className="bg-red-500 rounded text-black text-xl border-4 ml-4 mr-4 border-red-500"
          onDoubleClick={deleteAccount}
        >
          Delete account
        </button>
      </div>
    </div>
  );
}

export default Account;
