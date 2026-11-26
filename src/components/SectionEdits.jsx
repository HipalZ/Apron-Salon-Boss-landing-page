import { IMG } from '../assets'

export default function SectionEdits() {
  return (
    <>
<section className="scene" id="edits"><div className="stage"><div className="sleft"><div className="sframe">
<img className="fb" src={IMG[4]} alt="Owner watching the counter, then checking a bill edit alert" style={{'objectPosition':'20% 50%'}} /><img className="fa" src={IMG[5]} alt="" style={{'objectPosition':'20% 50%'}} />
<div className="tg onimg"><b>04</b><i></i><span>Bill edits</span></div><div className="acard" style={{'--cx':'53%','--cy':'20%'}}><div className="wa"><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.7 3.1.6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" /></svg></div><div><b>Bill Edited Alert</b><span>₹1,800</span><span>Order 412, item removed: Hair spa</span><span>Edited by Stylist B. Please verify.</span></div><em>now <svg className="bell" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z" /><path d="M10 20a2 2 0 0 0 4 0" /><circle cx="18" cy="5" r="3.2" fill="#e5483b" stroke="#fff" strokeWidth="1.5" /></svg></em></div><em className="ill onimg">Illustrative image. Sample data.</em></div>
<div className="hl"><h2 className="lb">What changed when you looked away?</h2><h2 className="la">Every bill edit, flagged the moment it happens.</h2></div></div></div></section>
    </>
  )
}
