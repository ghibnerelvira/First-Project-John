import React, { useState } from 'react';
import s from './index.module.css'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="wrapper">
    <div className={s.contact_container}>
      <div className={s.contact_info}>
        <h1>Contact Me</h1>
        <h3>Get in touch</h3>
        <h5>Email: devoloper.john@javascript.com</h5>
        <h5>Phone: +65 111 2345</h5>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Cumque, quaerat neque ratione consectetur dolor atque non quidem architecto adipisci, 
          beatae magnam odit sit voluptates reprehenderit sed laudantium veritatis eaque accusantium?
        </p>
      </div>

      <div className={s.contact_input}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={s.text_one}
            placeholder="Name"
            style={{ marginBottom: '25px' }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={s.text_two}
            placeholder="Email"
          />
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={s.text_lastone}
          rows="10"
          placeholder="Message"
        ></textarea>
        
        <div className={s.submit}>
        <input type="submit" className={s.submit_button}  onClick={handleSubmit} />
        </div>

      </div>

    </div> 
    </form>
  );
}

export default ContactForm;
