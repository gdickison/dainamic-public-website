/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactCapture () {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [company, setCompany] = useState(null)
  const [phone, setPhone] = useState(null)
  const [message, setMessage] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const form = useRef()

  function handleSubmit(e){
    e.preventDefault();

    const templateParams = {
      firstName,
      lastName,
      email,
      company,
      phone,
      message
    }

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_DAINAMIC_WHITEPAPER_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_DAINAMIC_WHITEPAPER_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          if(result.status === 200){
            setFirstName('')
            setLastName('')
            setEmail('')
            setCompany('')
            setPhone('')
            setMessage('')
            form.current.reset()
            setShowSuccess(true)
          }
      }, (error) => {
          console.log(error);
          setShowError(true)
      });
  }

  function handleSuccessClick () {
    setShowSuccess(false)
  }

  function handleErrorClick () {
    setShowError(false)
  }

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="/images/dainamic-whitepaper-cover.jpg"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Download the whitepaper</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how the increase in STEM workers has an especially pronounced effect in finance, and why the future requires digital transformation for small and mid sized banks to be competitive and comply with a growing regulatory burden.
            </p>
            <form
              ref={form}
              action="#"
              method="POST"
              className="mt-16"
              name="whitepaper-form"
              id="whitepaper-form"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="We promise not to spam you or give your information to anyone"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      type="text"
                      name="company"
                      id="company"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label htmlFor="phone" className="block font-semibold text-gray-900">
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      type="tel"
                      name="phone"
                      id="phone"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showSuccess &&
        <Success
          clickHandler={handleSuccessClick}
        />
      }
      {showError &&
        <Error
          clickHandler={handleErrorClick}
        />
      }
    </div>
  )
}

export function Success ({clickHandler}) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96">
      <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
        <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="mt-5 text-xl font-bold text-gray-900">Your request has been sent</p>
              <p className="mt-3 text-sm font-medium text-gray-500">Please check your email for the link to the whitepaper</p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={clickHandler}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-blue-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:bg-blue-600"
                >
                  Ok, Thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Error ({clickHandler}) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96">
      <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
        <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col items-center text-center">
              <img className="w-12" src="/images/error.svg" alt="error" />
              <p className="mt-5 text-xl font-bold text-gray-900">Something went wrong!</p>
              <p className="mt-3 text-sm font-medium text-gray-500">Sorry about that. We&apos;ll get that fixed right away.</p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={clickHandler}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-blue-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:bg-blue-600"
                >
                  Ok, Thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}