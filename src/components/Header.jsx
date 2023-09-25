import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Header = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/signIn");
        setUser(false);
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);
  return (
    <div className="px-[3rem] shadow-md">
      <nav className="h-[8vh] py-[2rem] flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-xl">ImageFlowHub.</h1>
        </Link>
        <ul className="flex gap-4">
          {user ? (
            <button
              onClick={logOut}
              className="border px-6 py-2 bg-slate-950 text-white rounded-md"
            >
              Log out
            </button>
          ) : (
            <div>
              <Link to="signIn">
                <button className="border px-6 py-2 rounded-md">Sign In</button>
              </Link>
              <Link to="signUp">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md transition-all hover:bg-blue-500  border">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
