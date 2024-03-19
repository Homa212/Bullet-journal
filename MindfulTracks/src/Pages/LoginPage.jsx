import React from "react";
import { Link } from "react-router-dom";
import LogIn from "../components/LogIn";

function LoginPage() {

  return (
    <div className="min-w-xl">

      <div className="mt-10">
      <Link to="/dashboard" className="py-4 underline">Dashboard</Link>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 font-amatic">
            Log in
          </h2>
        </div>
        <LogIn />
      </div>
    </div>
  );
}

export default LoginPage;
