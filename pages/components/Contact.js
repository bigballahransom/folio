import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_798gcgh', 'template_m58iu46', form.current, 'paZVfGZ40gJeIKN4x')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section className="dark:text-gray-800  pb-16 text-gray-200 bg-primary dark:bg-gray-800 border border-teal-600 dark:border-gray-900 shadow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="mt-6 text-3xl font-semibold dark:text-gray-200 text-center mb-4">Send me a 
          <span>
          <TypeAnimation className=' dark:text-gray-200' sequence={[
                    ' message...',
                    8000,
                    ' project proposal...',
                    8000,
                    ' message...',
                    8000,
                    ' project proposal...',
                    8000,
                    ' project proposal...',
                    8000,
                ]}/>
          </span>
          </h2>
          <form ref={form} onSubmit={sendEmail}>
              <div className='text-gray-900'>
        <div className='text-left mb-2 dark:text-gray-200'>
      <label className='text-white font-bold'>Name</label>
      </div>
      <div>
      <input className='p-1 w-full border shadow rounded-lg px-2' type="text" name="user_name" />
      </div>
      <div className='text-left my-2 dark:text-gray-200'>
      <label className='text-white font-bold'>Email</label>
      </div>
      <div>
      <input className='p-1 w-full border shadow rounded-lg px-2' type="email" name="user_email" />
      </div>
      <div className='text-left my-2 dark:text-gray-200'>
      <label className='text-white font-bold'>Message</label>
      </div>
      <div>
      <textarea className='p-2 w-full border shadow rounded-lg px-2 pb-8' name="message" />
      </div>
      <div className='text-left dark:text-gray-200'>
      <button className='flex gap-2 bg-white   mt-2 rounded-3xl hover:bg-darkblue px-6 py-3 text-primary hover:text-white ' type="submit" value="Send">
      

        Send
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</button>
      </div>
      </div>
    </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;