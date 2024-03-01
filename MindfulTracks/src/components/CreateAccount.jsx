import React from 'react';
import { Link } from "react-router-dom";


function CreateAccount() {
  
    return (
        <div className="">
            <div className="flex justify-center mt-32">
                <form className="flex flex-col justify-center items-center border-2 border-green-800 w-1/3 h-fit py-10 rounded-lg gap-3" action="">
                    <p className="text-2xl">Create account</p>
                    <div className="flex flex-col border-2 border-green-800 rounded">
                        <input type="text" placeholder=" First name"/>
                    </div>
                    <div className="flex flex-col border-2 border-green-800 rounded">
                        <input type="text" placeholder=" Last name"/>
                    </div>
                    <div className="flex flex-col border-2 border-green-800 rounded">
                        <input type="email" placeholder=" Email"/>
                    </div>
                    <div className="flex flex-col border-2 border-green-800 rounded">
                        <input type="password" placeholder=" Password"/>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" />
                        <p>I agree to the terms and conditions</p>
                    </div>
                    <button className="border p-3 w-1/3">Create Account</button>
                    <Link to="/LogIn"className="border p-3 w-1/3">Log In</Link>
                </form>
            </div>
        </div>
  )
};

export default CreateAccount;