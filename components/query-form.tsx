'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function QueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    verification: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    // Simple verification check (in real app, you'd do more robust verification)
    if (!formData.verification) {
      setError('Please complete the verification')
      return
    }

    // console.log('[v0] Form submitted:', formData)
    // setSubmitted(true)
    try {
      const res = await fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          verification: '',
        });
        setSubmitted(false);
      }, 3000);

    } catch (err) {
      setError('Something went wrong. Please try again.');
    }

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        verification: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Raise A Query/Complaint</h2>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            Thank you! Your query has been submitted successfully. We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-sm border">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b78bc]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b78bc]"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b78bc]"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="How can we help you?"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b78bc]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 items-end">
            <div className="bg-gray-100 p-3 rounded-lg text-sm font-semibold text-gray-700">
              Verification Code
            </div>
            <input
              type="text"
              name="verification"
              placeholder="Word Verification"
              value={formData.verification}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b78bc]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1b78bc] hover:bg-[#156399] text-white font-semibold py-2 rounded-lg"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}
