'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import ServiceCards from '@/components/service-cards'
import CSCSCardSection from '@/components/cscs-card-section'
import CitbTestSection from '@/components/citb-test-section'
import QueryForm from '@/components/query-form'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServiceCards />
      <CSCSCardSection />
      <CitbTestSection />
      <ContactSection />
      <QueryForm />
      <Footer />
    </main>
  )
}
