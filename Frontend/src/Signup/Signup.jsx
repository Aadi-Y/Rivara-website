import { Link } from "react-router-dom";
import { useState } from "react";
import { IoLogoGoogle } from "react-icons/io";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call or validation can go here
    console.log("Signup Data:", formData);
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 bg-white">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Signup</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 rounded px-6 py-8 flex flex-col gap-5"
          autoComplete="off"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="border p-2 bg-black text-white rounded hover:bg-transparent hover:text-black hover:border-black transition cursor-pointer"
          >
            Signup
          </button>

          <div className="text-center text-gray-500 text-sm">OR</div>

          <button
            type="button"
            className="flex border items-center justify-center gap-2 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-200 cursor-pointer" 
          >
            <IoLogoGoogle className="text-xl" />
            Continue with Google
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-600 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Signup;
