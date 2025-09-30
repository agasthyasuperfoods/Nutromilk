import ContactPage from '@/components/ContactUs'
import Faq from '@/components/Faq'
import ContactFooter from '@/components/Footer'
import HeroBanner from '@/components/HeroBanner'
import Map from '@/components/Map'
import Menu from '@/components/Menu'
import BenefitsShowcase from '@/components/Mockup'
import OurJourneySection from '@/components/OurJourney'
import OurStoryPage from '@/components/OurStory'
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
       <Map />
      <ContactFooter />
     
      
    </div>
  )
}

export default index
