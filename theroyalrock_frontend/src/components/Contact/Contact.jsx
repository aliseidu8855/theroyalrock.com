import React from 'react'
import './Contact.css'
import ContactMail from '@mui/icons-material/ContactMail';
import Call from '@mui/icons-material/Call';
import LocationOn from '@mui/icons-material/LocationOn';
import Mail from '@mui/icons-material/Mail';
import Send from "@mui/icons-material/Send";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b32cdbf8-d234-4bce-8ad9-c5b9d5716c54");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact'>
            <div className='contact-col'>
                <h2>Get in Touch <ContactMail className='contactIcon' /> </h2>
                <p>Feel free to reach out to us for any inquiries or to learn more about our programs</p>
                <ul>
                    <li><Call className='Icons' />(+233) 059 925 8006</li>
                    <li><LocationOn className='Icons' />info@theroyalrock.com</li>
                    <li><Mail className='Icons' />Cargo Building, P.O. Box KA9009,
                        International Airport, Accra-Ghana </li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your messages here</label>
                    <textarea name='message' rows={6} placeholder='Enter your message here' required></textarea>
                    <button type='submit' className='btn dark-btn'>Send Message <Send /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact
