import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        setUser(false);
        if (errorCode === "auth/invalid-email") {
          setErrorMessage("Invalid email address");
        } else if (errorCode === "auth/missing-password") {
          setErrorMessage("Password required");
        } else if (errorCode === "auth/invalid-login-credentials") {
          setErrorMessage("Invalid login credentials");
        } else {
          setErrorMessage("An error occurred");
        }
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
        user,
        errorMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
