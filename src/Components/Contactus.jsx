import React, { useState } from 'react';
import Header from './Header';
import '../Styles/contact.scss';
import '../Styles/mediaQuary.scss';

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mleqjlbl");
  if (state.succeeded) {
    return <p>Thanks for reaching out! We'll get back to you soon.</p>;
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="location">Location</label>
        <input id="location" type="text" name="location" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button data-cursorpointer={true} type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const Concatcus = () => {
  return (
    <div className="concatcus">
      <Header heading={'Contact Us'} />
      <ContactForm />
    </div>
  );
};

export default Concatcus;
