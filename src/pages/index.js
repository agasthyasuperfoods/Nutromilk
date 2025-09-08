import ContactPage from '@/components/ContactUs'
import Faq from '@/components/Faq'
import ContactFooter from '@/components/Footer'
import HeroBanner from '@/components/HeroBanner'
import Menu from '@/components/Menu'
import BenefitsShowcase from '@/components/Mockup'
import OurJourneySection from '@/components/OurJourney'
import OurStoryPage from '@/components/OurStory'
import ProductShowcase from '@/components/ProductShowcase'
import WhatWeStandFor from '@/components/Westand'
import React from 'react'

function index() {
  return (
    <div>
      <Menu />
      <HeroBanner />
      <OurStoryPage />
      <OurJourneySection />
     < BenefitsShowcase />
      <WhatWeStandFor />
       <Faq />
      
      <ContactFooter />
     
      
    </div>
  )
}

export default index
