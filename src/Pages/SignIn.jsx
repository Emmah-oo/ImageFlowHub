const SignIn = () => {
  return (
    <div className="min-h-[80vh]">
      <form className="flex min-h-[80vh] gap-y-10 flex-col items-center justify-center">
        <input type="text" placeholder="Email" className="border px-8 py-3" />
        <input
          type="password"
          placeholder="Password"
          className="border px-8 py-3"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
