import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/signin");
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="min-h-[80vh] w-[100%]">
      <form className="w-[80%] md:w-[60%] lg:w-[50%] my-5 m-auto flex min-h-[80vh] gap-y-10 flex-col items-center justify-center shadow-sm rounded-md">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
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
          placeholder="Create Password"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition-all border w-[70%]"
          onClick={onSubmit}
        >
          Signup
        </button>
        <div>
          <h1 className="mr-4">
            Already have an account?
            <Link to="/signin">
              <span className="text-blue-600">Login</span>{" "}
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
