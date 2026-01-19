'use client'

import Image from 'next/image'

export default function CSCSCardSection() {
  const steps = [
    'Fill the Card Application here. Choose the CSCS Card according to your qualification.',
    'Select which type of card booking you want to proceed with:',
    'Click Submit Application to continue to add CITB test ID, expired CSCS Card number(for Renew Card) and card delivery address.',
    'Confirm your details and make the payment.',
    'That\'s it. You will receive your CSCS Card in approximately 15 working days once it gets approved.',
  ]

  return (
    <section id="cscs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b78bc] mb-12">Apply For CSCS Card</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Card Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/pictures/citb-test.webp"
              alt="CSCS Card"
              width={500}
              height={350}
              className="object-contain rounded-lg"
            />
          </div>

          {/* Right - Steps */}
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-[#1b78bc] p-4 mb-6">
              <p className="text-[#1b78bc] font-semibold">
                Fill the Card Application
                <a href="#" className="underline ml-2">here</a>
                . Choose the CSCS Card according to your qualification.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">Select which type of card booking you want to proceed with:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#1b78bc] font-bold mt-1">▸</span>
                  <span className="text-gray-700">
                    <strong>Select New Card</strong> if you are applying for the first time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1b78bc] font-bold mt-1">▸</span>
                  <span className="text-gray-700">
                    <strong>Select Renew Card</strong> if you want to renew your expired CSCS card.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1b78bc] font-bold mt-1">▸</span>
                  <span className="text-gray-700">
                    <strong>Select Lost Card</strong> if you want a replacement for your existing CSCS card.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t">
              {steps.slice(2).map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#1b78bc] font-bold flex-shrink-0">▸</span>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
