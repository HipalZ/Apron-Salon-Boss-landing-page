import { useEffect } from 'react'

// Scroll-driven scenes, dashboard stack, WhatsApp carousel and back-to-top button.
export default function useScrollEffects() {
  useEffect(() => {
  
  const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav=$('.nav'),hero=$('.hero'),hcard=$('.hcard');
  const scenes=$$('.scene'),dash=$('.dash');
  function layout(){
    const W=hero.clientWidth,H=hero.clientHeight;
    if(W>900){const sc=Math.max(W/1429,H/804),ox=W-1429*sc,oy=(H-804*sc)/2;
      hcard.style.left=(ox+664*sc)+'px';hcard.style.top=(oy+97*sc)+'px';}
    else{hcard.style.left='';hcard.style.top='';}
  }
  function tick(){
    nav.classList.toggle('lt',scrollY>innerHeight-80);
    scenes.forEach(el=>{
      const r=el.getBoundingClientRect();
      let p=reduce?1:clamp(-r.top/(r.height-innerHeight),0,1);
      const f=clamp((p-.40)/.18,0,1),a=clamp((p-.52)/.14,0,1);
      $('.fa',el).style.opacity=f;
      $('.lb',el).style.opacity=1-clamp((p-.36)/.12,0,1);
      $('.la',el).style.opacity=clamp((p-.46)/.12,0,1);
      $('.acard',el).style.setProperty('--pa',a.toFixed(3));
      const pc=$('.pcard',el);if(pc)pc.style.setProperty('--pp',(reduce?0:clamp((p-.04)/.1,0,1)*(1-clamp((p-.40)/.1,0,1))).toFixed(3));
      $('.fb',el).style.transform=$('.fa',el).style.transform='scale('+(1.04-.04*clamp(p/.6,0,1)).toFixed(4)+')';
    });
    if(dash){
      const r=dash.getBoundingClientRect();
      let p=reduce?0:clamp(-r.top/(r.height-innerHeight),0,1);
      const pos=p*4,cards=$$('.dc',dash),ls=$$('.dl',dash),bars=$$('.dbars i',dash);
      cards.forEach((c,i)=>{
        let y,sc,op;
        if(pos>=i){const d=Math.min(pos-i,4);y=-d*22;sc=1-d*.045;op=1-d*.12;c.style.zIndex=i;}
        else{const t=clamp(pos-(i-1),0,1);y=(1-t)*(innerHeight*.9);sc=1;op=t>0?1:0;c.style.zIndex=i;}
        c.style.transform='translateY('+y.toFixed(1)+'px) scale('+sc.toFixed(4)+')';c.style.opacity=op.toFixed(3);
      });
      const act=Math.round(clamp(pos,0,4));
      ls.forEach((l,i)=>l.classList.toggle('on',i===act));bars.forEach((b,i)=>b.classList.toggle('on',i<=act));
    }
  }
  let raf=0;const on=()=>{if(!raf)raf=requestAnimationFrame(()=>{raf=0;tick();})};
  const onResize=()=>{layout();on()};const onLoad=()=>{layout();tick()};addEventListener('scroll',on,{passive:true});addEventListener('resize',onResize);
  layout();tick();addEventListener('load',onLoad);
  let wi=0,wt=0;const wcs=$$('.wc'),wis=$$('.wi'),wcount=$('.wcount');
  function wshow(i){wi=(i+wcs.length)%wcs.length;wcs.forEach((c,k)=>c.classList.toggle('on',k===wi));wis.forEach((c,k)=>c.classList.toggle('on',k===wi));wcount.textContent=String(wi+1).padStart(2,'0')+' / 04';
   const w=$('.wlist');const a=wis[wi];if(innerWidth<=900)w.scrollTo({left:a.offsetLeft-16,behavior:'smooth'});}
  wis.forEach((b,k)=>b.onclick=()=>{wshow(k);wpause=Date.now()+12000});
  $('.wp').onclick=()=>{wshow(wi-1);wpause=Date.now()+12000};$('.wn').onclick=()=>{wshow(wi+1);wpause=Date.now()+12000};
  var wpause=0;let timer=0;if(!reduce)timer=setInterval(()=>{if(Date.now()<wpause)return;const r=$('.wsec').getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)wshow(wi+1)},4500);
  
  const totop=document.querySelector('.totop');const onTop=()=>totop.classList.toggle('on',scrollY>600);document.addEventListener('scroll',onTop,{passive:true});
  return () => {
    removeEventListener('scroll', on)
    removeEventListener('resize', onResize)
    removeEventListener('load', onLoad)
    document.removeEventListener('scroll', onTop)
    clearInterval(timer)
    cancelAnimationFrame(raf)
  }
  }, [])
}
