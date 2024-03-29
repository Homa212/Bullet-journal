import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateAccount() {
let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState([]);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState([]);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState([]);

  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState("");

  function validateEmail() {
    let emailErrors = [];
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      emailErrors.push("It must be a correct email");
    }
    if (!email) {
      emailErrors.push("Email is required");
    }
    setEmailError(emailErrors);
  }

  function validatePassword() {
    let passwordErrors = [];
    const regex = /[^a-zA-Z0-9]/;
    if (password.length <= 8) {
      passwordErrors.push("Password length must be greater than 8");
    }
    if (!regex.test(password)) {
      passwordErrors.push("Your password must contain a unique character");
    }
    if (!password) {
      passwordErrors.push("Password is required");
    }
    setPasswordError(passwordErrors);
  }

  function validateFirstName() {
    let errors = [];
    if (!firstName) {
      errors.push("First name is required");
    }
    setFirstNameError(errors);
  }

  function validateLastName() {
    let errors = [];
    if (!lastName) {
      errors.push("Last name is required");
    }
    setLastNameError(errors);
  }

  function validateTerms() {
    if (!terms) {
      setTermsError("You must accept our terms, OR ELSE!");
    } else {
      setTermsError("");
    }
  }

  async function submitRegister(e) {
    e.preventDefault();
    validateEmail();
    validatePassword();
    validateFirstName();
    validateLastName();
    validateTerms();

    if (
      emailError.length === 0 &&
      passwordError.length === 0 &&
      firstNameError.length === 0 &&
      lastNameError.length === 0 &&
      !termsError
    ) {
      try {
        const response = await fetch(
          "http://localhost:8000/user/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              firstname: firstName,
              lastname: lastName,
              password: password,
            }),
          }
        );
        const data = await response.json();

        if (response.status === 201) {
          console.log("Success");
          navigate("/LoginPage");
        } else {
          console.log("Something went wrong");
          //   Log the response json to the console
          console.log(data);
          throw new Error("Error from the server");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Error in form");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-6 bg-white shadow-xl sm:px-10 border-2 rounded-md border-emerald-800 font-josefin font-medium ">
            <form className="space-y-6" onSubmit={submitRegister}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-3 py-2 placeholder-white border bg-transparent border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-emerald-600 focus:border-emerald-800 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                  />
                  {emailError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-black">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="block w-full px-3 py-2 placeholder-white border bg-transparent border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-emerald-600 focus:border-emerald-800 sm:text-sm"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={validateFirstName}
                  />
                  {firstNameError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-black">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="block w-full px-3 py-2 placeholder-white border bg-transparent border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-emerald-600 focus:border-emerald-800 sm:text-sm"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={validateLastName}
                  />
                  {lastNameError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-black">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-3 py-2 placeholder-white border bg-transparent border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-emerald-600 focus:border-emerald-800 sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={validatePassword}
                  />
                  {passwordError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-black">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <label
                  htmlFor="terms"
                  className="block ml-2 text-sm text-gray-900"
                >
                  I agree to the terms and conditions
                </label>
              </div>
              {termsError && (
                <p className="mt-2 text-sm text-black">{termsError}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-bold text-white border font-josefin bg-green-800 border-emerald-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800 transition-transform  hover:scale-110 hover:bg-green-800 "
                >Sign up
                </button>
                  <div class="text-center w-full items-center text-sm grid grid-cols-3 mt-5 ">
                    <hr class="border-t-1  border-gray-400" />
                    <span>or</span>
                    <hr class="border-t-1 border-gray-400 " />
                  </div>
                <Link 
                  to="/LoginPage"
                  type="submit"
                  className=" mt-3 flex justify-center w-full px-4 py-2 text-sm font-bold text-black border font-josefin border-emerald-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800 transition-transform  hover:scale-110"
                >Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}