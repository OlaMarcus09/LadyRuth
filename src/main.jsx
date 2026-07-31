import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const A='/';
const img = n => `${A}${encodeURIComponent(n)}`;
const photos = [
  ['WhatsApp Image 2026-07-31 at 7.20.00 PM.jpeg','Nigerian Idol / live broadcast'],
  ['WhatsApp Image 2026-07-31 at 7.20.06 PM.jpeg','Blue hour / velvet vocals'],
  ['WhatsApp Image 2026-07-31 at 7.20.12 PM.jpeg','A room in full colour'],
  ['WhatsApp Image 2026-07-31 at 7.20.28 PM.jpeg','The wide frame'],
  ['WhatsApp Image 2026-07-31 at 7.20.17 PM.jpeg','Red set / deep feeling'],
  ['WhatsApp Image 2026-07-31 at 7.19.59 PM.jpeg','After dark'],
  ['WhatsApp Image 2026-07-31 at 7.20.26 PM.jpeg','The conversation'],
  ['WhatsApp Image 2026-07-31 at 7.20.15 PM.jpeg','A moment suspended']
];
const testimonials = [
  ['being_wurah', 'I would be lying if I said I didn’t feel goosebumps rush all over my body when I heard you sing. You’re damn good girl.'],
  ['omawonder', 'Vocal control, low register and the build up… 👏🏾👏🏾'],
  ['Essence💕', 'Listening to a very soothing voice like this brings more peace whilst listening.'],
  ['Riches', 'Okay this is lovely, but I don’t know why I am crying.']
];
const services = [
  ['01','Hotel evenings','A polished, expressive set for lobbies, lounges and signature dining rooms.'],
  ['02','Fine dining','Intimate live music that gives a beautiful room its own pulse.'],
  ['03','Weddings & celebrations','A tailored soundtrack for entrances, dinners and once-in-a-lifetime toasts.'],
  ['04','Corporate & diplomatic','Discerning live entertainment for launches, receptions and private rooms.']
];

function Arrow(){ return <span className="arrow">↗</span> }
function App(){
 const [lightbox,setLightbox]=useState(null); const [sent,setSent]=useState(false);
 useEffect(()=>{ const els=document.querySelectorAll('.reveal'); const ob=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12}); els.forEach(e=>ob.observe(e)); return()=>ob.disconnect(); },[]);
 return <div className="site">
  <header className="nav"><a className="brand" href="#top"><span className="brand-mark">LR</span><span>Lady Ruth<br/><i>DéjàVu Band</i></span></a><nav><a href="#story">The story</a><a href="#repertoire">Repertoire</a><a href="#gallery">Gallery</a><a href="#booking">Enquire</a></nav><a className="nav-cta" href="#booking">Book the band <Arrow/></a></header>
  <main id="top">
   <section className="hero"><img src={img('WhatsApp Image 2026-07-31 at 7.19.59 PM.jpeg')} /><div className="hero-shade"/><div className="hero-content reveal"><p className="eyebrow">Lagos · Nigeria · Worldwide</p><h1>Premium live music.<br/><em>One unforgettable night.</em></h1><p className="hero-sub">Four languages. A voice that stays with you.<br/>Where every note feels like déjà vu.</p><a className="button gold" href="#booking">Plan your evening <Arrow/></a></div><div className="hero-foot"><span>01 / 04</span><span className="hero-line"/><span>Scroll to explore</span></div></section>
   <section id="story" className="story section reveal"><div className="section-kicker">01 <span>Meet the voice</span></div><div className="story-grid"><div><h2>A little <em>more</em><br/>than a live set.</h2><p className="lead">Lady Ruth Singer brings a rare kind of presence to the room: cinematic, precise and deeply human.</p><p>Ruth Asigoboka Paul Owubokiri, 26, is a vocalist from Ogu/Bolo in Rivers State, raised in Port Harcourt. She found her first audience in church at ten, then returned to the spotlight after a four-year hiatus following her move to Lagos in 2019.</p><p>Today, she leads Lady Ruth’s DéjàVu Band — a premium live act moving effortlessly from French chanson and Italian classics to Spanish romance, jazz, soul and the R&B records everyone knows by heart.</p><div className="badge"><span>✦</span><div><strong>Nigerian Idol Season 9</strong><small>Top 7 finalist · 2024</small></div></div></div><div className="portrait-wrap"><img src={img('WhatsApp Image 2026-07-31 at 7.20.21 PM.jpeg')} /><span className="portrait-caption">Ruth Asigoboka<br/><i>Lady Ruth Singer</i></span></div></div></section>
   <section id="repertoire" className="repertoire section reveal"><div className="section-kicker">02 <span>The signature</span></div><div className="repertoire-head"><h2>Four languages.<br/><em>Infinite feeling.</em></h2><p>Music has no borders. Lady Ruth’s repertoire is built for guests who listen closely — and rooms that deserve to feel alive.</p></div><div className="languages"><div><b>EN</b><span>English</span></div><div><b>FR</b><span>Français</span></div><div><b>IT</b><span>Italiano</span></div><div><b>ES</b><span>Español</span></div></div><div className="genre-row"><span>Jazz</span><span>Soul</span><span>R&B</span><span>International classics</span><span>French chanson</span></div></section>
   <section id="gallery" className="gallery section reveal"><div className="section-kicker">03 <span>On stage</span></div><div className="gallery-head"><h2>Scenes from<br/><em>the feeling.</em></h2><p>Every performance is a room transformed. Tap any frame to step closer.</p></div><div className="gallery-grid">{photos.map((p,i)=><button key={p[0]} className={`gallery-item item-${i+1}`} onClick={()=>setLightbox(p)}><img src={img(p[0])} loading="lazy"/><span>{p[1]} <Arrow/></span></button>)}</div></section>
   <section className="words reveal"><div className="section-kicker">04 <span>In their words</span></div><div className="quote-grid">{testimonials.map(t=><blockquote key={t[0]}><span className="quote-mark">“</span><p>{t[1]}</p><cite>@{t[0]}</cite></blockquote>)}</div></section>
   <section className="services section reveal"><div className="section-kicker">05 <span>For your occasion</span></div><div className="services-head"><h2>Make it<br/><em>memorable.</em></h2><p>From a candlelit dinner to a room full of two hundred guests, we shape the energy around your occasion.</p></div><div className="service-grid">{services.map(s=><article key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><Arrow/></article>)}</div></section>
   <section id="booking" className="booking reveal"><div className="booking-copy"><div className="section-kicker">06 <span>Start a conversation</span></div><h2>Let’s make<br/><em>some magic.</em></h2><p>Tell us about the room, the mood and the moment you’re planning. We’ll be in touch within 48 hours.</p><div className="contact-list"><a href="mailto:ladyruthdejavu@gmail.com">ladyruthdejavu@gmail.com <Arrow/></a><a href="https://instagram.com/ladyruthsinger">@ladyruthsinger on Instagram <Arrow/></a></div></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><span>✦</span><h3>Thank you for reaching out.</h3><p>Your note is on its way to Lady Ruth’s team.</p></div>:<><div className="form-row"><label>Your name<input required placeholder="Full name"/></label><label>Email address<input required type="email" placeholder="you@example.com"/></label></div><div className="form-row"><label>Event date<input type="date"/></label><label>Event type<select><option>Choose an occasion</option><option>Wedding</option><option>Corporate event</option><option>Private celebration</option><option>Hotel / fine dining</option></select></label></div><div className="form-row"><label>Location<input placeholder="City / venue"/></label><label>Guest count<input placeholder="Approximate number"/></label></div><label>Tell us about your vision<textarea rows="4" placeholder="The mood, the music, the moment…"/></label><button className="button gold" type="submit">Send inquiry <Arrow/></button></>}</form></section>
  </main>
  <footer><a className="brand" href="#top"><span className="brand-mark">LR</span><span>Lady Ruth<br/><i>DéjàVu Band</i></span></a><p>Premium live music for exceptional rooms.</p><div><a href="mailto:ladyruthdejavu@gmail.com">Email</a><a href="https://instagram.com/ladyruthsinger">Instagram</a><a href="https://tiktok.com/@lady.ruth.singer">TikTok</a></div><small>© 2024 Lady Ruth’s DéjàVu Band · Lagos, Nigeria</small></footer>
  {lightbox&&<div className="lightbox" onClick={()=>setLightbox(null)}><button aria-label="Close">×</button><img src={img(lightbox[0])}/><span>{lightbox[1]}</span></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
