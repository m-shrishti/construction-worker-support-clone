'use client'

import { Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs text-gray-500 font-mono mb-2">CONTACT US</p>
          <h2 className="text-3xl font-bold text-gray-900">Let's get your<br />queries answered</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Say hello */}
          <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg">
            <Mail className="w-8 h-8 text-[#1b78bc] mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Say hello</h3>
            <a
              href="mailto:support@constructionworkersupport.com"
              className="text-[#1b78bc] hover:underline font-medium"
            >
              support@constructionworkersupport.com
            </a>
            <p className="text-gray-600 mt-2">+44 113 519 9938 (Mon-Fri, 9am-5pm)</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg">
            <MapPin className="w-8 h-8 text-[#1b78bc] mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
            <p className="text-gray-700">
              14 King Street, International House
              <br />
              Leeds
              <br />
              LS1 2HL
              <br />
              United Kingdom
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
