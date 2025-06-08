import { useState } from "react";

export default function Contact() {
    
    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');




    return <>
        <div className="contact-section flex justify-center items-center h-screen">
            <form className="w-1/2">
                <div id="userName flex-grow">
                    <div className="overflow-hidden my-5 font-semibold">
                        <p className={username ? "translate-y-0 duration-300 text-green-400" : "translate-y-5 duration-300 text-green-400"}>User Name:</p>
                    </div>
                    <input type="text" id="userName" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="input w-full border-b-2 border-gray-200 focus:outline-none pb-3"></input>
                </div>
                <div id="userAge">
                    <div className="overflow-hidden my-5 font-semibold">
                        <p className={userAge ? "translate-y-0 duration-300 text-green-400" : "translate-y-5 duration-300 text-green-400"}>User Age:</p>
                    </div>
                    <input type="number" id="userAge" placeholder="User Age" onChange={(e) => setUserAge(e.target.value)} className="input w-full border-b-2 border-gray-200 focus:outline-none pb-3"></input>
                </div>
                <div id="userEmail">
                    <div className="overflow-hidden my-5 font-semibold">
                        <p className={userEmail ? "translate-y-0 duration-300 text-green-400" : "translate-y-5 duration-300 text-green-400"}>User Email:</p>
                    </div>
                    <input type="email" id="userEmail" placeholder="User Email" onChange={(e) => setUserEmail(e.target.value)} className="input w-full border-b-2 border-gray-200 focus:outline-none pb-3"></input>
                </div>
                <div id="userPassword">
                    <div className="overflow-hidden my-5 font-semibold">
                        <p className={userPassword ? "translate-y-0 duration-300 text-green-400" : "translate-y-5 duration-300 text-green-400"}>User Password:</p>
                    </div>
                    <input type="password" id="userPassword" placeholder="User Password" onChange={(e) => setUserPassword(e.target.value)} className="input w-full border-b-2 border-gray-200 focus:outline-none pb-3"></input>
                </div>
            </form>
        </div>
    </>

}
