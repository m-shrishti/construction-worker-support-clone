'use client'
import Image from 'next/image'
export default function CitbTestSection() {
  return (
    <section id="citb" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b78bc] mb-4">How to Book Your CITB Test?</h2>
        <p className="text-gray-700 mb-12 text-lg">
          CITB Health & Safety Test required for a CSCS Card.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - CITB Test Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/pictures/GreenCard_4.webp"
              alt="CITB Test"
              width={500}
              height={350}
              className="object-contain rounded-lg"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-[#1b78bc] p-4">
              <p className="text-gray-900">
                Booking your <strong>CITB Health, Safety & Environment Test</strong> (commonly known as CITB Touchscreen Test) is easier with Construction Worker Support.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#1b78bc] font-bold text-xl flex-shrink-0">▸</span>
                <div>
                  <p className="text-gray-900">
                    Fill the <a href="#" className="text-[#1b78bc] underline font-semibold">CITB Test Booking application here</a>. Choose your preferred date & test centre.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#1b78bc] font-bold text-xl flex-shrink-0">▸</span>
                <p className="text-gray-900">Review your booking and complete the payment.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#1b78bc] font-bold text-xl flex-shrink-0">▸</span>
                <p className="text-gray-900">
                  That's it. You will receive the confirmation via email and/or text on your registered email address within a few minutes.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Not sure which test to book? Find the correct test according to your occupation{' '}
                <a href="#" className="text-[#1b78bc] underline font-semibold">
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
