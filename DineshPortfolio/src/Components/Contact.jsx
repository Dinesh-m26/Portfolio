import { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")
    const [data, setData] = useState([])
    const api = "http://localhost:3000"

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
                const res = await fetch(api + '/form', {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, message })
                }); if (res.ok) {
                    console.log("res is ok ");
                    setData([...data, { name, email, message }])
                    setName(""),
                        setEmail(""),
                        setMessage("")
                } else {
                    console.log("not workking");
                }
            }
        } catch (error) {
            console.log("unable to post")
        }


    }

    return (
        <div id="contact" className="px-4 sm:px-0">
            <h1 className='text-[#90A0D9] text-3xl sm:text-5xl font-bold text-center py-4'>Contact</h1>
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-[#90A0D9] text-lg font-semibold mb-2">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-[#90A0D9] rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-[#90A0D9]"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-[#90A0D9] text-lg font-semibold mb-2">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-[#90A0D9] rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-[#90A0D9]"
                        />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-[#90A0D9] text-lg font-semibold mb-2">
                        Message:
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border border-[#90A0D9] rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-[#90A0D9] h-32 resize-none"
                        />
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#90A0D9] text-[#23283E] font-semibold py-2 px-4 rounded focus:outline-none hover:bg-opacity-80 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
