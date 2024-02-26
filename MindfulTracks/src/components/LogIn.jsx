import { useState } from "react";


function LogInBox() {

    const [user, setNewUser] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const addUser = () => {
        const newUser = [...user, firstName, lastName, email];
        setNewUser(newUser);
      };

    return (
        <>
            <div className="flex justify-center items-center">
                <div className=" bg-orange-50 border border-green-700 w-3/4 h-fit">
                    <input type="name" aria-label="First name" onChange={handleFirstNameChange}/>
                    <input type="name" aria-label="Last name" onChange={handleLastNameChange}/>
                    <input type="email" aria-label="Email-adress" onChange={handleEmailChange} />
                    <button onClick={addUser}>Create user</button>
                </div>
            </div>
        </>
    );
};

export default LogInBox;