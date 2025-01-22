// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
// import {sendForm} from 'emailjs'
// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     emailjs.sendForm('service_24z0g7a', 'template_grief0m', '#myForm').then(
//       (response) => {
//         console.log('SUCCESS!', response.status, response.text);
//       },
//       (error) => {
//         console.log('FAILED...', error);
//       },
//     );
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const faqs = [
//     {
//       question: "What is your typical response time?",
//       answer: "We aim to respond to all inquiries within 24 hours during business days."
//     },
//     {
//       question: "Do you work with international clients?",
//       answer: "Yes, we work with clients worldwide and can accommodate different time zones."
//     },
//     {
//       question: "What are your payment terms?",
//       answer: "We typically require a 50% deposit to begin work, with the remaining balance due upon completion."
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
//         <p className="text-xl text-gray-600 dark:text-gray-400">
//           Have a project in mind? Let's discuss how we can help.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Contact Information */}
//         <div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//             <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-lg">
//               <FaPhone className="h-6 w-6 text-primary mb-4" />
//               <h3 className="text-lg font-bold mb-2">Phone</h3>
//               <p className="text-gray-600 dark:text-gray-400">+91 8197172781</p>
//             </div>
//             <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-lg">
//               <FaEnvelope className="h-6 w-6 text-primary mb-4" />
//               <h3 className="text-lg font-bold mb-2">Email</h3>
//               <p className="text-gray-600 dark:text-gray-400">mohammedashhad.work@gmail.com</p>
//             </div>
//             <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-lg">
//               <FaMapMarkerAlt className="h-6 w-6 text-primary mb-4" />
//               <h3 className="text-lg font-bold mb-2">Location</h3>
//               <p className="text-gray-600 dark:text-gray-400">Tumkur, Karnataka, India</p>
//             </div>
//             <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-lg">
//               <FaClock className="h-6 w-6 text-primary mb-4" />
//               <h3 className="text-lg font-bold mb-2">Business Hours</h3>
//               <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 9AM - 6PM</p>
//             </div>
//           </div>

//           {/* FAQ Section */}
//           <div className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
//             <div className="space-y-6">
//               {faqs.map((faq, index) => (
//                 <div key={index}>
//                   <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
//                   <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white dark:bg-dark-light p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-dark dark:border-gray-600 focus:ring-2 focus:ring-primary"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-dark dark:border-gray-600 focus:ring-2 focus:ring-primary"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-dark dark:border-gray-600 focus:ring-2 focus:ring-primary"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="6"
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-dark dark:border-gray-600 focus:ring-2 focus:ring-primary"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary w-full">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_24z0g7a', // Replace with your service ID
        'template_grief0m', // Replace with your template ID
        formRef.current,
        'CzvK5Bw1h2Ib7OEVc' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFeedback({ success: true, message: 'Message sent successfully!' });
        },
        (error) => {
          console.error('FAILED...', error);
          setFeedback({ success: false, message: 'Failed to send message. Please try again.' });
        }
      );

    // Reset form fields
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days.',
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we work with clients worldwide and can accommodate different time zones.',
    },
    {
      question: 'What are your payment terms?',
      answer: 'We typically require a 50% deposit to begin work, with the remaining balance due upon completion.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Have a project in mind? Let's discuss how we can help.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-lg">
              <FaPhone className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+91 8197172781</p>
            </div>
            <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-lg">
              <FaEnvelope className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">mohammedashhad.work@gmail.com</p>
            </div>
            <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-lg">
              <FaMapMarkerAlt className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Tumkur, Karnataka, India</p>
            </div>
            <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-lg">
              <FaClock className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Business Hours</h3>
              <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-dark-light p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-dark-light p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-dark dark:border-gray-600 focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-dark dark:border-gray-600 focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-dark dark:border-gray-600 focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-dark dark:border-gray-600 focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
            {feedback && (
              <p
                className={`mt-4 text-sm ${
                  feedback.success ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {feedback.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
