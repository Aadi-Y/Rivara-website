import { Link } from "react-router-dom";
import { useState } from "react";
import { IoLogoGoogle } from "react-icons/io";

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

    // Simulated API call
    console.log("Login Data:", loginData);

    // Example: axios.post('/api/login', loginData).then(...)
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 bg-white">
      <div className="w-full max-w-sm bg-gray-100 rounded shadow p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={loginData.password}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />

          <button
            type="submit"
            className="bg-black text-white p-2 rounded hover:bg-transparent hover:text-black border border-black transition-all duration-200"
          >
            Login
          </button>

          <div className="text-center text-sm text-gray-600">OR</div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-gray-300 border p-2 rounded text-gray-700 hover:bg-gray-200 cursor-pointer"
          >
            <IoLogoGoogle className="text-xl" />
            Continue with Google
          </button>

          <p className="text-center text-sm mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-amber-600 underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
