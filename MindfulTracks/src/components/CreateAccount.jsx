// import React , { useState } from 'react';
// import { Link } from "react-router-dom";
// import Validation from './CreateAccountValidation';


// function CreateAccount() {

//     const [values, setValues] = useState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         password: ""
//     });

//     const [errors, setErrors] =useState({})
//     const handleInput = (event) => {
//         setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setErrors(Validation(values));
//     }

//     return (
//         <div className="">
//             <div className="flex justify-center mt-32">
//                 <form className="flex flex-col justify-center items-center text-center border-2 border-green-800 w-1/3 h-fit py-10 rounded-lg gap-3"
//                 action="" onSubmit={handleSubmit}>
//                     <p className="text-2xl">Create account</p>
//                     <div className="flex flex-col border-2 border-green-800 rounded">
//                         <input type="text" placeholder=" First name" name="firstname" onChange={handleInput}/>
//                         {errors.firstname && <span className="text-orange-500">{errors.firstname}</span>}
//                     </div>
//                     <div className="flex flex-col border-2 border-green-800 rounded">
//                         <input type="text" placeholder=" Last name" name="lastname" onChange={handleInput}/>
//                         {errors.lastname && <span className="text-orange-500">{errors.lastname}</span>}
//                     </div>
//                     <div className="flex flex-col border-2 border-green-800 rounded">
//                         <input type="email" placeholder=" Email" name="email" onChange={handleInput}/>
//                         {errors.email && <span className="text-orange-500">{errors.email}</span>}
//                     </div>
//                     <div className="flex flex-col border-2 border-green-800 rounded">
//                         <input type="password" placeholder=" Password" name="password" onChange={handleInput}/>
//                         {errors.password && <span className="text-orange-500">{errors.password}</span>}
//                     </div>
//                     <div className="flex flex-row gap-2">
//                         <input type="checkbox" />
//                         <p>I agree to the terms and conditions</p>
//                     </div>
//                     <button className="border p-3 w-1/3">Create Account</button>
//                     <Link to="/LogIn"className="border p-3 w-1/3">Log In</Link>
//                 </form>
//             </div>
//         </div>
//   )
// };

// export default CreateAccount;