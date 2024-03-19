import React from "react";
import { Link } from "react-router-dom";
import CreateAccount from "../components/CreateAccount";

function RegisterPage() {
  return (
    <div className="min-w-xl">
      <div className="mt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-extrabold text-center font-amatic text-gray-900">
            Sign up
          </h2>
        </div>
        <CreateAccount/>
      </div>
    </div>
  );
}

export default RegisterPage;
