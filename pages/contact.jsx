// import { useState } from 'react';
// import ContactCode from '../components/ContactCode';
// import styles from '../styles/ContactPage.module.css';


// const ContactPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const submitForm = async (e) => {
//     e.preventDefault();
//     console.log(process.env.NEXT_PUBLIC_API_URL);
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
//       method: 'POST',
//       body: JSON.stringify({ name, email, subject, message }),
//     });
//     if (res.ok) {
//       alert('Your response has been received!');
//       setName('');
//       setEmail('');
//       setSubject('');
//       setMessage('');
//     } else {
//       alert('There was an error. Please try again in a while.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div>
//         <h3 className={styles.heading}>Reach Out Via Socials</h3>
//         <ContactCode />
//       </div>
//       <div>
//         <h3 className={styles.heading}>Or Fill Out This Form</h3>
//         <form className={styles.form} onSubmit={submitForm}>
//           <div className={styles.flex}>
//             <div>
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="name">Subject</label>
//             <input
//               type="text"
//               name="subject"
//               id="subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="message">Message</label>
//             <textarea
//               name="message"
//               id="message"
//               rows="5"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   return {
//     props: { title: 'Contact' },
//   };
// }

// export default ContactPage;
import React, { useRef, useState } from 'react';

import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';


const ContactPage = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');

  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_n86fsfk',
        'template_vkxm3no',
        formRef.current,
        '8u_FhiR9-z_goSvQI'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };




  const submitForm = async (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (res.ok) {
      alert('Your response has been received!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
          
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          {message && <span style={{padding:"0rem 0.5rem"}}>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
