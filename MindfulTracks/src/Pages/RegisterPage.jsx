import React from "react";
import { Link } from "react-router-dom";
import CreateAccount from "../components/CreateAccount";

function RegisterPage() {
  return (
    <div className="min-w-xl">
      <div className="mt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Registrera ett konto
          </h2>
        </div>
        <CreateAccount/>
      </div>
    </div>
  );
}

export default RegisterPage;
