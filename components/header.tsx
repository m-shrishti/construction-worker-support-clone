'use client'

import { useState } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [cscsDropdownOpen, setCscsDropdownOpen] = useState(false)
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false)

  return (
    <header className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 h-[68px]">
          {/* Logo Section */}
          <div className="flex items-center gap-3 pr-6 border-r border-white/30">
            <div className="flex items-center h-full pr-6 border-r border-white/30 overflow-hidden">
              <Image
                src="/pictures/logo-alt2.webp"
                alt="CWS Logo"
                width={150}
                height={38}
                className="object-contain"
                priority
              />
            </div>

          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center gap-2 ml-6">
            <Phone className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">0113 519 9938</span>
              <span className="text-xs">Mon-Sat (9 AM-5 PM)</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 ml-auto">
            <a href="#citb" className="text-sm font-semibold hover:text-gray-200 transition-colors whitespace-nowrap">
              CITB Test
            </a>

            {/* CSCS Cards Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCscsDropdownOpen(true)}
              onMouseLeave={() => setCscsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold hover:text-gray-200 transition-colors whitespace-nowrap">
                CSCS Cards
                <ChevronDown className="w-4 h-4" />
              </button>
              {cscsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg py-2 min-w-48 z-50">
                  <a href="#cscs" className="block px-4 py-2 hover:bg-gray-100 text-sm">Apply for CSCS Card</a>
                  <a href="#renew" className="block px-4 py-2 hover:bg-gray-100 text-sm">Renew CSCS Card</a>
                  <a href="#lost" className="block px-4 py-2 hover:bg-gray-100 text-sm">Lost CSCS Card</a>
                </div>
              )}
            </div>

            {/* Construction Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold hover:text-gray-200 transition-colors whitespace-nowrap">
                Construction Courses
                <ChevronDown className="w-4 h-4" />
              </button>
              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg py-2 min-w-48 z-50">
                  <a href="#nvq" className="block px-4 py-2 hover:bg-gray-100 text-sm">NVQ Level 2</a>
                  <a href="#health-safety" className="block px-4 py-2 hover:bg-gray-100 text-sm">Health & Safety</a>
                  <a href="#first-aid" className="block px-4 py-2 hover:bg-gray-100 text-sm">First Aid Training</a>
                </div>
              )}
            </div>

            <a href="#group" className="text-sm font-semibold hover:text-gray-200 transition-colors whitespace-nowrap">
              Group Booking
            </a>
            <a href="#contact" className="text-sm font-semibold hover:text-gray-200 transition-colors whitespace-nowrap">
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/20 pt-4">
            <a
              href="#citb"
              className="block py-2 text-sm font-medium hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CITB Test
            </a>

            {/* Mobile CSCS Cards Dropdown */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 text-sm font-medium hover:text-gray-200 transition-colors"
                onClick={() => setCscsDropdownOpen(!cscsDropdownOpen)}
              >
                CSCS Cards
                <ChevronDown className={`w-4 h-4 transition-transform ${cscsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {cscsDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a href="#cscs" className="block py-1 text-sm text-gray-200" onClick={() => setIsOpen(false)}>Apply for CSCS Card</a>
                  <a href="#renew" className="block py-1 text-sm text-gray-200" onClick={() => setIsOpen(false)}>Renew CSCS Card</a>
                  <a href="#lost" className="block py-1 text-sm text-gray-200" onClick={() => setIsOpen(false)}>Lost CSCS Card</a>
                </div>
              )}
            </div>

            {/* Mobile Construction Courses Dropdown */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 text-sm font-medium hover:text-gray-200 transition-colors"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              >
                Construction Courses
                <ChevronDown className={`w-4 h-4 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {coursesDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a href="#nvq" className="block py-1 text-sm text-gray-200" onClick={() => setIsOpen(false)}>NVQ Level 2</a>
                  <a href="#health-safety" className="block py-1 text-sm text-gray-200" onClick={() => setIsOpen(false)}>Health & Safety</a>
                  <a href="#first-aid" className="block py-1 text-sm text-gray-200" onClick={() => setIsOpen(false)}>First Aid Training</a>
                </div>
              )}
            </div>

            <a
              href="#group"
              className="block py-2 text-sm font-medium hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Group Booking
            </a>
            <a
              href="#contact"
              className="block py-2 text-sm font-medium hover:text-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>

            <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <div>
                <div className="text-lg font-bold">0113 519 9938</div>
                <div className="text-xs">Mon-Sat (9 AM-5 PM)</div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
