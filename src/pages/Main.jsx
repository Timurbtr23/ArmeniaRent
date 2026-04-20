import Hero from '../components/Hero'
import Audience from '../components/Audience'
import Pricing from '../components/Pricing'
import ClientResults from '../components/ClientResults'
import WhatIncluded from '../components/WhatIncluded'
import Process from '../components/Process'
import QualityControl from '../components/QualityControl'
import Terms from '../components/Terms'
import Documents from '../components/Documents'
import Risks from '../components/Risks'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import PersonalManager from '../components/PersonalManager'
import Guarantees from '../components/Guarantees'
import FAQ from '../components/FAQ'
import SocialProof from '../components/SocialProof'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Main() {
  return (
    <>
      <Hero />
      <Pricing />
      <SocialProof />
      <ClientResults />
      <WhatIncluded />
      <Process />
      <QualityControl />
      <Terms />
      <Documents />
      <Risks />
      <Testimonials />
      <PersonalManager />
      <Guarantees />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  )
}