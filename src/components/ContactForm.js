import React from 'react'
import "./ContactForm.scss";
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
const ContactForm = () => {
    const [state, handleSubmit] = useForm("mdojaldz");
    if (state.succeeded) {
        return <p>Thanks</p>;
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
      <label htmlFor="email">
        
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Ingresa tu email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
      </div>
    </form>
  )
}

export default ContactForm;