'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CreditCard, FileText, Award, Users } from 'lucide-react'

export default function ServiceCards() {
  const services = [
    {
      id: 1,
      title: 'Apply CSCS Card',
      description: 'Apply For CSCS Card online. CSCS card renewal, or request a replacement for the lost card. The CSCS Card booking is £65 which includes the £36 CSCS fee, booking fee and VAT.',
      buttonText: 'Apply Now',
      icon: CreditCard,
    },
    {
      id: 2,
      title: 'Book CITB HS&E Test',
      description: 'Book Your CITB Health, Safety & Environment Test at your nearest test centre.',
      buttonText: 'Book Now',
      icon: FileText,
    },
    {
      id: 3,
      title: 'Construction Course leading to Green Card',
      description: 'Book Your Health & Safety Awareness Course Online or Offline.',
      buttonText: 'Book Now',
      icon: Award,
    },
    {
      id: 4,
      title: 'Group Book',
      description: 'Book CITB Health & Safety Test, CSCS Cards, and Construction Course leading to Green Card for multiple delegates. Get exclusive discounts!',
      buttonText: 'Enquire',
      icon: Users,
    },
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 bg-[#1b78bc] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1b78bc] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Button */}
                  <Button className="w-full bg-[#1b78bc] hover:bg-[#156399] text-white font-semibold py-3">
                    {service.buttonText}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
