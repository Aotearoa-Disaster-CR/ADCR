// ContactForm.tsx

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [group, setGroup] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="p-4 bg-neutral-50 shadow-md rounded-md">
            <h4 className='texl-lg font-bold'>Enquires</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4">

                <label className="input input-bordered flex items-center"
                    htmlFor='name'>
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label className="input input-bordered flex items-center"
                    htmlFor='email'>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label className="input input-bordered flex items-center"
                    htmlFor='phone'>
                    <input
                        type="phone"
                        placeholder="Phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </label>

                <label className="input input-bordered flex items-center"
                    htmlFor='group'>
                    <input
                        type="text"
                        placeholder="Group / Organisation"
                        id="group"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        required
                    />
                </label>


                <textarea
                    className="textarea textarea-bordered"
                    placeholder="Message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                >
                </textarea>

                <label className="label cursor-pointer">
                    <span className="label-text">Needing help</span>
                    <input type="radio" name="radio-need" className="radio checked:bg-red-500" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Giving help</span>
                    <input type="radio" name="radio-give" className="radio checked:bg-red-500" defaultChecked />
                </label>

                <button className='btn btn-submit'
                    type="submit"
                >Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
