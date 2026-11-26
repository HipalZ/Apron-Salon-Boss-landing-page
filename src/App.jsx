import Nav from './components/Nav'
import Hero from './components/Hero'
import SectionDiscounts from './components/SectionDiscounts'
import SectionEarnings from './components/SectionEarnings'
import SectionEdits from './components/SectionEdits'
import SectionDayend from './components/SectionDayend'
import SectionWhatsapp from './components/SectionWhatsapp'
import SectionDashboard from './components/SectionDashboard'
import SectionFeedback from './components/SectionFeedback'
import SectionTrusted from './components/SectionTrusted'
import SectionContact from './components/SectionContact'
import BackToTop from './components/BackToTop'
import useScrollEffects from './useScrollEffects'

export default function App() {
  useScrollEffects()
  return (
    <>
      <Nav />
      <Hero />
      <SectionDiscounts />
      <SectionEarnings />
      <SectionEdits />
      <SectionDayend />
      <SectionWhatsapp />
      <SectionDashboard />
      <SectionFeedback />
      <SectionTrusted />
      <SectionContact />
      <BackToTop />
    </>
  )
}
