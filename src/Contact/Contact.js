// import React, { useState } from "react";
// import emailjs from 'emailjs-com';
// import './Contact.css';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';


// const Contactinfo = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const [showPopup, setShowPopup] = useState(false);
//     const [popupMessage, setPopupMessage] = useState('');

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.send(
//             'service_rmvjah9', // Replace with your EmailJS service ID
//             'template_mdd9kxu', // Replace with your EmailJS template ID
//             {
//                 from_name: formData.name,
//                 from_email: formData.email,
//                 message: formData.message,
//                 reply_to: 'silambukural13@gmail.com' // Your email
//             },
//             'WywEyt1PfPkzRE8qm' // Replace with your EmailJS user ID
//         ).then((response) => {
//             console.log('SUCCESS!', response.status, response.text);
//             setPopupMessage('Thank you for showing interest in my profile. I will get back to you soon!');
//             setShowPopup(true);
//         }).catch((err) => {
//             console.error('FAILED...', err);
//             setPopupMessage('Failed to send the email. Please try again.');
//             setShowPopup(true);
//         });

//         setFormData({
//             name: '',
//             email: '',
//             message: ''
//         });
//     };


//     const closePopup = () => {
//         setShowPopup(false);
//     };

//     return (
//         <div className="Contactinfo" id="contactpage">
//             <div className="social_icons">
//                 <h1>Contactinfo</h1>
//                 <p>"Get in touch if you’re seeking a designer who can elevate your brand to new heights"</p>
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '30px', height: '80px' }}>
//                     <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
//                         <FaGithub size={30} color="#333" style={{ marginRight: '10px' }} />
//                         <span style={{ fontSize: '20px', color: '#333' }} ><a href="https://github.com/Silambutamizhl">GitHub</a></span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <FaLinkedin size={30} color="#0077B5" style={{ marginRight: '10px' }} />
//                         <span style={{ fontSize: '20px', color: '#0077B5' }}><a href="https://www.linkedin.com/in/silambutamizhl/">LinkedIn</a></span>
//                     </div>
//                 </div>
//             </div>

//             <form className="sendemail" onSubmit={sendEmail}>
//                 <div>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your name"
//                         required
//                     />
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your email"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Message</label>
//                     <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Your message"
//                         required
//                     />
//                 </div>
//                 <button type="submit">Contact US</button>
//             </form>

//             {showPopup && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <p>{popupMessage}</p>
//                         <button onClick={closePopup}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Contactinfo;



import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import contactim from './path-to-your-illustration.png';
import Mjordrdan from "../images/jordan.png";
// import contactimage from "./images/contactimage.jpg";
const Contactinfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_rmvjah9',
            'template_mdd9kxu',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                reply_to: 'silambukural13@gmail.com'
            },
            'WywEyt1PfPkzRE8qm'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setPopupMessage('Thank you for showing interest in my profile. I will get back to you soon!');
            setShowPopup(true);
        }).catch((err) => {
            console.error('FAILED...', err);
            setPopupMessage('Failed to send the email. Please try again.');
            setShowPopup(true);
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="contact">
            <div className="Contactinfo" id="contactpage">
                <div className="form-section">
                    <h1>GET IN TOUCH</h1>
                    <p>"Get in touch if you’re seeking a designer who can elevate your brand to new heights"</p>
                    <form className="sendemail" onSubmit={sendEmail}>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                required
                            />
                        </div>
                        <button type="submit">Contact US</button>
                    </form>
                    {showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                <p>{popupMessage}</p>
                                <button onClick={closePopup}>Close</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="illustration-section">
                    <div>
                        <img src={Mjordrdan} alt="Illustration" />

                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '30px', height: '80px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                <FaGithub size={30} color="#333" style={{ marginRight: '10px' }} />
                                <span style={{ fontSize: '20px', color: '#333' }} ><a href="https://github.com/Silambutamizhl">GitHub</a></span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaLinkedin size={30} color="#0077B5" style={{ marginRight: '10px' }} />
                                <span style={{ fontSize: '20px', color: '#0077B5' }}><a href="https://www.linkedin.com/in/silambutamizhl/">LinkedIn</a></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contactinfo;
