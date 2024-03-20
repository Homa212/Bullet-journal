import React, { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // State to hold validation error message
  const [success, setSuccess] = useState(""); // State to hold success message

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email before proceeding
    if (!validateEmail(email)) {
      setError("Please enter a valid email address."); // Set an error message
      return; // Prevent form submission
    }

    // Reset error state if email passes validation
    setError("");

    // TODO ADD FETCH LOGIC HERE
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="font font-josefin">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="relative block w-full px-3 py-2 text-gray-900 mb-2 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 focus:z-10 sm:text-sm"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-xs italic text-black">{error}</p>}{" "}
        {/* Display validation error */}
      </div>
      <div>
        <button
          type="submit"
          className="flex justify-center w-full px-4 py-2 text-sm font-bold text-white border font-josefin bg-green-800 border-emerald-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800 transition-transform  hover:scale-110 hover:bg-green-800 "
        >
          Send Reset Link
        </button>
      </div>
      {success && (
        <div>
          <p className="text-sm italic text-green-500">{success}</p>
        </div>
      )}{" "}
    </form>
  );
};

export default PasswordReset;