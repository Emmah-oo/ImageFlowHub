import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider ({ children }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
        setUser(true);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setUser(false);
      });
  };
  return (
    <AppContext.Provider
      value={{
       email,
       setEmail,
       password,
       setPassword,
       onLogin,
       user
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;