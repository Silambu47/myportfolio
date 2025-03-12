import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contactinfo = () => {
    return (
        <div className="footer" style={{ marginTop: '50px', background: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="social_icons" style={{ marginLeft: '10%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '30px', height: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <FaGithub size={30} color="#333" style={{ marginRight: '10px' }} />
                        <span style={{ fontSize: '20px', color: '#333' }} ><a href="https://github.com/Silambutamizhl"></a></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <FaLinkedin size={30} color="#0077B5" style={{ marginRight: '10px' }} />
                        <span style={{ fontSize: '20px', color: '#0077B5' }}><a href="https://www.linkedin.com/in/silambutamizhl/"></a></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <FaInstagram size={30} color="#C13584" style={{ marginRight: '10px' }} />
                        <span style={{ fontSize: '20px', color: '#C13584' }}><a href="https://www.instagram.com/Silambutamizhi"></a></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <SiGmail size={30} color="#EA4335" style={{ marginRight: '10px' }} />
                        <span style={{ fontSize: '20px', color: '#EA4335' }}><a href="mailto:silambukural13@gmail.com"></a></span>
                    </div>
                </div>
            </div>
            <div>
                <p style={{ textAlign: 'center', marginLeft: '10%' }}>@silambarasan</p>
            </div>
        </div>
    );
};

export default Contactinfo;
