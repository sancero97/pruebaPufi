import React from "react";
import "./NewsLetter.scss";
import ContactForm from "./ContactForm";

const NewsLetter = () => {
  return (
    <div>
      <div className="newLetter">
        <span>NEWSLETTER</span>
        <p>SUSCRIBETE</p>
        <small>Y enterate de todas las novedades</small>
        
        <ContactForm/>
        
      </div>
      
    </div>
  );
};

export default NewsLetter;