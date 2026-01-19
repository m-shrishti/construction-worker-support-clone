'use client'

import { Mail, Lock } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 - Contact & Links */}
          <div>
            <a
              href="mailto:support@constructionworkersupport.com"
              className="flex items-center gap-2 text-[#1b78bc] hover:underline font-medium mb-6 text-sm"
            >
              <Mail className="w-4 h-4" />
              support@constructionworkersupport.com
            </a>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-[#1b78bc] hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-[#1b78bc] hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Quick Links & Payment */}
          <div>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <a href="#" className="text-[#1b78bc] hover:underline">
                  Know Your Card
                </a>
              </li>
              <li>
                <a href="#" className="text-[#1b78bc] hover:underline">
                  CSCS Card Types
                </a>
              </li>
              <li>
                <a href="#" className="text-[#1b78bc] hover:underline">
                  Trade Wise Test
                </a>
              </li>
              <li>
                <a href="#" className="text-[#1b78bc] hover:underline">
                  Test Centers
                </a>
              </li>
            </ul>

            {/* Secure Payments Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#635BFF] text-white px-3 py-1 rounded text-sm font-semibold">
                  stripe
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="bg-black text-white px-3 py-1.5 rounded text-xs font-semibold">
                  MC
                </div>
                <div className="bg-[#1434CB] text-white px-3 py-1.5 rounded text-xs font-semibold">
                  VISA
                </div>
                <div className="bg-black text-white px-3 py-1.5 rounded text-xs font-semibold">
                  DISCOVER
                </div>
                <div className="bg-[#006FCF] text-white px-3 py-1.5 rounded text-xs font-semibold">
                  AMEX
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Logo & Disclaimer */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-300">
                <Image
                  src="/pictures/logo-alt2.webp"
                  alt="CWS Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 leading-tight uppercase">Construction</span>
                <span className="text-sm font-bold text-gray-900 leading-tight uppercase">Worker</span>
                <span className="text-sm font-bold text-gray-900 leading-tight uppercase">Support</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 italic text-left md:text-right max-w-xs">
              Construction Worker Support explicitly states that we are not part of, or associated with CSCS or CITB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
