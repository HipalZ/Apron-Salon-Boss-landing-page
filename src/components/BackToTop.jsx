
export default function BackToTop() {
  return (
    <>
<button className="totop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg></button>
    </>
  )
}
