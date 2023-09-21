import { useEffect, useState } from "react";
// import AppContext from "../Context/AppContext";

const Home = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);
  return (
    <div className="h-[80vh] flex items-center justify-center w-[100%]">
      {user ? (
        <h1>Logged In</h1>
      ) : (
        <h1 className="font-bold text-2xl">Sign In to View Images.</h1>
      )}
    </div>
  );
};

export default Home;
