import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="min-h-[80vh] w-[100%]">
      <form className="w-[80%] md:w-[60%] lg:w-[50%] my-5 m-auto flex min-h-[80vh] gap-y-10 flex-col items-center justify-center shadow-sm rounded-md">
        <input
          type="text"
          placeholder="Email"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
        <input
          type="password"
          placeholder="Create Password"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border px-4 py-3 w-[80%] outline-none rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition-all border w-[70%]"
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
