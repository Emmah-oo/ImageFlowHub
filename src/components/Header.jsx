import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-[3rem] shadow-md">
      <nav className="h-[8vh] py-[2rem] flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-xl">ImageFlowHub.</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="signIn">
            <button className="border px-6 py-2 rounded-md">Sign In</button>
          </Link>
          <Link to="signUp">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md transition-all hover:bg-transparent hover:text-black border">
              Sign Up
            </button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
