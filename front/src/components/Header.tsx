'use client'

import React, { useState } from 'react'
import FormRender from './contact/FormRender';
import { FormSchema } from '@/global.types';

const formSchema: FormSchema = {
  name: {
    label: "Name",
    type: "text",
    placeholder: "Fill your full name",
    regex: /^[a-zA-Z\s]{4,}$/,
    errorMessage: "Please enter a valid name (minimum 4 characters)."
  },
  email: {
    label: "Email",
    type: "text",
    placeholder: "Fill a valid e-mail",
    regex: /^\S+@\S+\.\S+$/,
    errorMessage: "Please enter a valid email address."
  },
  phone: {
    label: "Phone",
    type: "text",
    placeholder: "Fill your phone",
    regex: /^\d{10}$/,
    errorMessage: "Please enter a valid 10-digit phone number."
  },
  message: {
    label: "Message",
    type: "textarea",
    placeholder: "Hello...",
    regex: /.*/,
    errorMessage: "Please enter a message."
  }
};

export default function Header() {
  const [contactForm, setContactForm] = useState(false)
  return (
    <>
      <header className="h-16 text-2xl text-white font-bold flex justify-between items-center px-[10%] bg-[#2D2D2D] w-full ">
        <a href="/">Rockr Blog</a>
        <nav className="flex text-lg font-normal gap-7">
          <a href="/">Posts</a>
          <a className="cursor-pointer" onClick={() => { setContactForm(true) }}>Contact</a>
        </nav>
      </header>
      {contactForm && <>
        <section className="fixed  top-0 left-0 w-screen h-screen grid place-items-center">
          <div className="h-screen w-screen bg-black opacity-65 fixed top-0 left-0"></div>

          <div className="md:w-1/3 w-3/4 relative p-10 bg-white flex items-center flex-col">
            <div onClick={() => { setContactForm(false) }} className='absolute right-3 text-black top-2 text-2xl cursor-pointer'>x</div>
            <h3 className="text-[#f1a10a] font-bold text-3xl">Contact</h3>
            <FormRender formSchema={formSchema} />
          </div>
        </section>
      </>}
    </>
  )
}
