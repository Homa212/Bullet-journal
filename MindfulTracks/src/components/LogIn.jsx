import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LogInValidation";

function LogIn() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] =useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className="">
            <div className="flex justify-center mt-32">
                <form className="flex flex-col justify-center items-center text-center border-2 border-green-800 w-1/3 h-fit py-10 rounded-lg gap-3" action="" onSubmit={handleSubmit}>
                    <p className="text-2xl">Log In</p>
                    <div className="flex flex-col border-2 border-green-800 rounded">
                        <input className="p-2" type="email" placeholder=" Enter email" name="email" onChange={handleInput}/>
                    </div>
                    {errors.email && <span className=" text-orange-500">{errors.email}</span>}
                    <div className="flex flex-col border-2 border-green-800 rounded">
                        <input className="p-2" type="password" placeholder=" Enter password" name="password" onChange={handleInput}/>
                    </div>
                    {errors.password && <span className="text-orange-500">{errors.password}</span>}
                    <button type="submit" className="border rounded-lg p-3 w-1/3">Log In</button>
                    <button>Forgot your password?</button>
                    <Link to="/CreateAccount"className="border rounded-lg p-3 w-1/3">Create Account</Link>
                </form>
            </div>
        </div>
    );
};

export default LogIn;