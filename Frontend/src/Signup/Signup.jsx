import { Link } from "react-router-dom";
import { useState } from "react";

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
    // You can add validation or API call here
    console.log("Signup Data:", formData);
  };

  return (
    <section className="flex items-center justify-center h-[100vh] w-[100vw] flex-col gap-2">
      <h1 className="text-2xl">Signup</h1>

      <form
        onSubmit={handleSubmit}
        className="px-5 py-7 rounded flex flex-col gap-5 w-[20%] bg-gray-100"
      >
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="border p-2 w-full bg-black text-white cursor-pointer hover:text-black hover:bg-transparent hover:border-black rounded"
        >
          Signup
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-600 underline">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Signup;
