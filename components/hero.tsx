'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1b78bc] leading-tight">
              Meet All Your
              <br />
              Requirements To
              <br />
              Get On Site
            </h1>
            <Button
              className="bg-[#1b78bc] hover:bg-[#156399] text-white text-lg px-8 py-6 rounded-lg flex items-center gap-2 group"
            >
              I am looking for
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Placeholder */}
          <div className="bg-gray-300 rounded-2xl aspect-square flex items-center justify-center text-gray-500">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src={"/pictures/cscs-card1.webp"} alt="Hero Image"
                width={600}
                height={600}
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
