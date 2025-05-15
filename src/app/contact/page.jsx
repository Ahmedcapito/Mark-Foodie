'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import True from "@/animations/true";
import Error from "@/animations/error";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);

  // Errors & Success states
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successes, setSuccesses] = useState({
    first_name: false,
    last_name: false,
    email: false,
    phone: false,
    message: false
  });

  const validateField = (name, value) => {
    let error = '';
    let success = false;

    switch (name) {
      case 'first_name':
      case 'last_name':
        if (!value.trim()) error = 'This field is required';
        else success = true;
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'This field is required';
        else if (!emailRegex.test(value)) error = 'Invalid email format';
        else success = true;
        break;

      case 'phone':
        if (value && !/^\+?\d{7,15}$/.test(value)) error = 'Invalid phone number';
        else success = true;
        break;

      case 'message':
        if (!value.trim()) error = 'This field is required';
        else success = true;
        break;

      default:
        break;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    setSuccesses(prev => ({ ...prev, [name]: success }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let formValid = true;
    const formData = new FormData(form.current);

    for (const [name, value] of formData.entries()) {
      validateField(name, value);
      if (!value.trim()) formValid = false;
    }

    if (!formValid) {
      setMessageStatus('error');
      return;
    }

    emailjs
      .sendForm('service_sho0jt9', 'template_6drww0q', form.current, {
        publicKey: 'getw7SrbyK6A3_eAd',
      })
      .then(() => {
        setMessageStatus('success');
        form.current.reset();
        setErrors({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          message: ''
        });
        setSuccesses({
          first_name: false,
          last_name: false,
          email: false,
          phone: false,
          message: false
        });
      })
      .catch((error) => {
        setMessageStatus('error');
        console.error('FAILED...', error.text);
      });
  };

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Effect */}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-6xl tracking-tight text-gray-100 font-bold sm:text-5xl">
          Contact Us
        </h2>
        <hr className="w-40 mx-auto mt-5 mb-5 text-amber-600" />
      </motion.div>

      {/* Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className="mx-auto mt-16 max-w-xl sm:mt-20 mb-60"
        noValidate
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          {/* First Name */}
          <div>
            <label htmlFor="first_name" className="block text-sm/6 font-semibold text-gray-100">
              First Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-100 bg-transparent outline-1
                  ${
                    errors.first_name
                      ? 'border-2 border-red-600 focus:outline-red-600'
                      : successes.first_name
                      ? 'border-2 border-amber-600 focus:outline-amber-600'
                      : 'border border-gray-500 focus:outline-fuchsia-950'
                  }
                `}
              />
              {errors.first_name && <p className="mt-1 text-sm text-red-600">{errors.first_name}</p>}
              {!errors.first_name && successes.first_name && <p className="mt-1 text-sm text-amber-600">Looks good!</p>}
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last_name" className="block text-sm/6 font-semibold text-gray-100">
              Last Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last_name"
                required
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-100 bg-transparent outline-1
                  ${
                    errors.last_name
                      ? 'border-2 border-red-600 focus:outline-red-600'
                      : successes.last_name
                      ? 'border-2 border-amber-600 focus:outline-amber-600'
                      : 'border border-gray-500 focus:outline-fuchsia-950'
                  }
                `}
              />
              {errors.last_name && <p className="mt-1 text-sm text-red-600">{errors.last_name}</p>}
              {!errors.last_name && successes.last_name && <p className="mt-1 text-sm text-amber-600">Looks good!</p>}
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-100">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-100 bg-transparent outline-1
                  ${
                    errors.email
                      ? 'border-2 border-red-600 focus:outline-red-600'
                      : successes.email
                      ? 'border-2 border-amber-600 focus:outline-amber-600'
                      : 'border border-gray-500 focus:outline-fuchsia-950'
                  }
                `}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              {!errors.email && successes.email && <p className="mt-1 text-sm text-amber-600">Looks good!</p>}
            </div>
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-100">
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-100 bg-transparent outline-1
                  ${
                    errors.phone
                      ? 'border-2 border-red-600 focus:outline-red-600'
                      : successes.phone
                      ? 'border-2 border-amber-600 focus:outline-amber-600'
                      : 'border border-gray-500 focus:outline-fuchsia-950'
                  }
                `}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              {!errors.phone && successes.phone && <p className="mt-1 text-sm text-amber-600">Looks good!</p>}
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-100">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-base text-gray-100 bg-transparent outline-1
                  ${
                    errors.message
                      ? 'border-2 border-red-600 focus:outline-red-600'
                      : successes.message
                      ? 'border-2 border-amber-600 focus:outline-amber-600'
                      : 'border border-gray-500 focus:outline-fuchsia-950'
                  }
                `}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              {!errors.message && successes.message && <p className="mt-1 text-sm text-amber-600">Looks good!</p>}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 block w-full rounded-md bg-gray-100 px-3.5 py-2.5 text-lg font-black text-fuchsia-950 hover:text-gray-100 cursor-pointer shadow hover:bg-amber-600 transition duration-300 ease-in-out focus:outline-2 focus:outline-indigo-600"
        >
          Send
        </motion.button>

        {/* Status Message */}
        {messageStatus === 'success' && (
          <div className="text-gray-100 text-center mt-4 flex justify-center items-center gap-2">
            Message sent successfully!
            <Lottie className="w-10" animationData={True} loop={true} />
          </div>
        )}
        {messageStatus === 'error' && (
          <div className="text-gray-100 text-center mt-4 flex justify-center items-center gap-2">
            Something went wrong. Please try again.
            <Lottie className="w-10" animationData={Error} loop={true} />
          </div>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
