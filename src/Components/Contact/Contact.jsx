import { useState } from "react";

export default function Contact() {
    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // يمكنك إضافة منطق إرسال النموذج هنا
        console.log({ username, userAge, userEmail, userPassword });
    };

    return (
        <div className="bg-white w-screen contact-section flex justify-center items-center h-screen">
            <form className="w-1/2" onSubmit={handleSubmit}>
                <div id="userName flex-grow">
                    <div className="overflow-hidden my-5 font-semibold">
                        <p className={username ? "translate-y-0 duration-300 text-green-400" : "translate-y-5 duration-300 text-green-400"}>User Name:</p>
                    </div>
                    <input 
                        type="text" 
                        id="userName" 
                        placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="input w-full border-b-2 border-gray-500 focus:outline-none pb-3"
                    />
                </div>
                <div id="userAge">
                    <div className="overflow-hidden my-5 font-semibold">
                        <p className={userAge ? "translate-y-0 duration-300 text-green-400" : "translate-y-5 duration-300 text-green-400"}>User Age:</p>
                    </div>
                    <input 
                        type="number" 
                        id="userAge" 
                        placeholder="User Age" 
                        onChange={(e) => setUserAge(e.target.value)} 
                        className="input w-full border-b-2 border-gray-500 focus:outline-none pb-3"
                    />
                </div>
                <div id="userEmail">
                    <div className="overflow-hidden my-5 font-semibold">
                        <p className={userEmail ? "translate-y-0 duration-300 text-green-400" : "translate-y-5 duration-300 text-green-400"}>User Email:</p>
                    </div>
                    <input 
                        type="email" 
                        id="userEmail" 
                        placeholder="User Email" 
                        onChange={(e) => setUserEmail(e.target.value)} 
                        className="input w-full border-b-2 border-gray-500 focus:outline-none pb-3"
                    />
                </div>
                <div id="userPassword">
                    <div className="overflow-hidden my-5 font-semibold">
                        <p className={userPassword ? "translate-y-0 duration-300 text-green-400" : "translate-y-5 duration-300 text-green-400"}>User Password:</p>
                    </div>
                    <input 
                        type="password" 
                        id="userPassword" 
                        placeholder="User Password" 
                        onChange={(e) => setUserPassword(e.target.value)} 
                        className="input w-full border-b-2 border-gray-200 focus:outline-none pb-3"
                    />
                </div>
                
                <button 
                    type="submit" 
                    className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}