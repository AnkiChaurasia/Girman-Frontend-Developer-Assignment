import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const email = "contact@girmantech.com";
    const subject = encodeURIComponent("Inquiry");
    const body = encodeURIComponent("Hello,\n\n");

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Redirect to the home page after a delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000); // Adjust the delay as needed

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return null; 
};

export default Contact;
