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
    <section className="text-gray-800 dark:text-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4">Send me a 
          <span>
          <TypeAnimation className='text-gray-800 dark:text-gray-200' sequence={[
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
      <label className=' font-bold'>Name</label>
      </div>
      <div>
      <input className='p-1 w-full border shadow rounded-lg px-2' type="text" name="user_name" />
      </div>
      <div className='text-left my-2 dark:text-gray-200'>
      <label className=' font-bold'>Email</label>
      </div>
      <div>
      <input className='p-1 w-full border shadow rounded-lg px-2' type="email" name="user_email" />
      </div>
      <div className='text-left my-2 dark:text-gray-200'>
      <label className=' font-bold'>Message</label>
      </div>
      <div>
      <textarea className='p-2 w-full border shadow rounded-lg px-2 pb-8' name="message" />
      </div>
      <div className='text-left dark:text-gray-200'>
      <button className='bg-teal-600 dark:bg-teal-400 rounded-3xl hover:bg-teal-400 dark:hover:bg-teal-600 px-6 py-3 text-white mt-2' type="submit" value="Send">Send</button>
      </div>
      </div>
    </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;