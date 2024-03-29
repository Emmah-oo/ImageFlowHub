import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/AppContext";

const SignIn = () => {
  const { email, setEmail, password, setPassword, onLogin, errorMessage } =
    useContext(AppContext);

  return (
    <div className="min-h-[80vh] w-[100%]">
      <form className="w-[80%] md:w-[60%] lg:w-[50%] m-auto flex min-h-[80vh] my-5 gap-y-10 flex-col items-center justify-center shadow-sm rounded-md">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
          required
        />
        <div>
          <h1 className="text-xl text-red-600">{errorMessage}</h1>
        </div>
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
