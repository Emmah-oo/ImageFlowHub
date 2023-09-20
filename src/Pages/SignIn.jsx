import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-[80vh] w-[100%]">
      <form className="w-[80%] md:w-[60%] lg:w-[50%] m-auto flex min-h-[80vh] my-5 gap-y-10 flex-col items-center justify-center shadow-sm rounded-md">
        <input
          type="text"
          placeholder="Email"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition-all border w-[70%]"
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
