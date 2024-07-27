import React, { useState } from "react";
import { useRouter } from "next/router";
import { Success, Error } from "../components/ContactCapture";

export default function Contact () {
  const [name, setName] = useState('')
  const [bank, setBank] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const router = useRouter()

  async function sendEmail(e){
    e.preventDefault()
    setIsSubmitting(true)

    const contactParams = {
      name,
      bank,
      email,
      message
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        contactParams
      })
    })

    response.status === 200 ? setShowSuccess(true) : setShowError(true)
  }

  function handleSuccessClick () {
    setShowSuccess(false)
    document.getElementById("contact-form").reset()
    router.push('/')
  }

  function handleErrorClick () {
    setShowError(false)
    document.getElementById("contact-form").reset()
    router.push('/')
  }

  return (
    <section className="relative py-10 bg-white sm:py-16 lg:py-24 mt-16 md:mt-2" style={{minHeight: "calc(100vh - 455px)"}}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:leading-tight lg:text-5xl">Let&apos;s talk about how Dainamic can help you</h2>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="overflow-hidden bg-gray-100 rounded-md">
              <div className="p-6 sm:p-10">
                <form
                  className="mt-4"
                  name="contact-form"
                  id="contact-form"
                  // ref={form}
                  onSubmit={sendEmail}
                  method="POST"
                >
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="text-base font-medium text-gray-900">Name</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required="required"
                          placeholder="Your Name"
                          data-error="Your Name is Required"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bank" className="text-base font-medium text-gray-900">Bank Name</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="bank"
                          id="bank"
                          required="required"
                          placeholder="Your Bank Name"
                          data-error="Bank Name is Required"
                          value={bank}
                          onChange={e => setBank(e.target.value)}
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required="required"
                          data-error="Please Enter Valid Email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-base font-medium text-gray-900"> Message </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="message"
                          id="message-input-simple"
                          placeholder="Your Message"
                          required
                          data-error="Please, Leave us a message"
                          value={message}
                          onChange={e => setMessage(e.target.value)}
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <button type="submit" name="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700" disabled={isSubmitting}>
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
    </section>
  )
}