import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation or API call here
    console.log("Login Data:", loginData);
  };

  return (
    <section className="flex items-center justify-center h-[100vh] w-[100vw] flex-col gap-2">
      <h1 className="text-2xl">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="px-5 py-7 rounded flex flex-col gap-5 w-[20%] bg-gray-100"
      >
        <div className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={loginData.password}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="border p-2 w-full bg-black text-white cursor-pointer hover:text-black hover:bg-transparent hover:border-black rounded"
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-amber-600 underline">
            Signup
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
