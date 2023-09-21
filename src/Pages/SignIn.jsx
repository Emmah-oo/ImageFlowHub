import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-[80vh] w-[100%]">
      <form className="w-[80%] md:w-[60%] lg:w-[50%] m-auto flex min-h-[80vh] my-5 gap-y-10 flex-col items-center justify-center shadow-sm rounded-md">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition-all border w-[70%]"
          onClick={onLogin}
        >
          Login
        </button>
        <div>
          <h1 className="mr-4">
            Don&apos;t have an account?{" "}
            <Link to="/signup">
              <span className="text-blue-600">Signup</span>{" "}
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
