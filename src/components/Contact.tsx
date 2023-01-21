import { useRef, useState } from 'react';
import './../style/contact.scss';
import Social from './Social';
import validator from 'validator';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [send, setSend] = useState('Send');
  const form = useRef<HTMLFormElement>(null);
  const sendMessage = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || message === '') return;
    if (!validator.isEmail(email)) {
      setEmailError('Enter a valid email!');
      return;
    }
    else setEmailError('');
    setSend('Sending');
    const serviceId = 'service_wfelqfo';
    const templateId = 'template_us567uc';
    if(form?.current){
      emailjs.sendForm(serviceId, templateId, form.current, 'coLDfIFrCSTEcC1rC')
      .then((result) => {
         setSend('Sent, Thanks!');
         setName('');
         setEmail('');
         setMessage('');
         setTimeout(()=> {
          setSend('Send');
         }, 2000)
      }, (error) => {
         setSend('Send again please');
      });
    }
    
  }
  return (
    <div style={{ padding: '10px' }} className="contact">
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <div className="links">
              <Social />
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendMessage}>
              <div className="form-item">
                <input type="text" name="name" required onChange={(e) => setName(e.target.value)} value={name}/>
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                <label>Message:</label>
              </div>
              <div className='error'>{emailError}</div>
              <input type='submit' className="submit-btn" value={send}/>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
