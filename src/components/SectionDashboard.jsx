import { IMG } from '../assets'

export default function SectionDashboard() {
  return (
    <>
<section className="dash" id="dashboard"><div className="dstage"><div className="dtext"><div className="tg"><b>07</b><i></i><span>Dashboard</span></div><h2>Your salon,<br />one screen.</h2><p className="lead">The same numbers behind your alerts, in reports you can download.</p><div className="dlabels"><div className="dl"><b>01</b> <span>/ 05</span> Business overview<p>All outlets, one view.</p></div><div className="dl"><b>02</b> <span>/ 05</span> Operator performance<p>Know your top performer by the numbers.</p></div><div className="dl"><b>03</b> <span>/ 05</span> Memberships<p>See what your members are worth.</p></div><div className="dl"><b>04</b> <span>/ 05</span> Sales report<p>Every bill, discount and tax line, settled.</p></div><div className="dl"><b>05</b> <span>/ 05</span> Footfall and trends<p>See who comes back, and when you're busiest.</p></div></div><div className="dbars"><i></i><i></i><i></i><i></i><i></i></div></div><div className="dstack"><img className="dc" src={IMG[8]} alt="Business overview" /><img className="dc" src={IMG[9]} alt="Operator performance" /><img className="dc" src={IMG[10]} alt="Memberships" /><img className="dc" src={IMG[11]} alt="Sales report" /><img className="dc" src={IMG[12]} alt="Footfall and trends" /></div><em className="ill">Illustrative image. Sample data.</em></div></section>
    </>
  )
}
