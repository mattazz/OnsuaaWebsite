import { useState } from "react";

function ContactForm() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const mailtoLink = `mailto: test@example.com?subject=${formData.subject}&body=${formData.message}`;
        window.location.href = mailtoLink;
    }


    return (
        <form className="flex flex-col space-y-4 w-full max-w-xl" onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
            />
            <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded h-32"
            />
            <button type="submit" className="p-2 bg-red-600 text-white rounded">E-Mail Us</button>
        </form>
    )
}

export default ContactForm;