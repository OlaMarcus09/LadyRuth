import { useEffect, useRef, useState } from 'react';

const A='/';
const img = (name: string) => `${A}${encodeURIComponent(name)}`;
const photos: [string, string][] = [
  ['WhatsApp Image 2026-07-31 at 7.20.00 PM.jpeg','Nigerian Idol / live broadcast'],
  ['WhatsApp Image 2026-07-31 at 7.20.06 PM.jpeg','Blue hour / velvet vocals'],
  ['WhatsApp Image 2026-07-31 at 7.20.12 PM.jpeg','A room in full colour'],
  ['WhatsApp Image 2026-07-31 at 7.20.28 PM.jpeg','The wide frame'],
  ['WhatsApp Image 2026-07-31 at 7.20.17 PM.jpeg','Red set / deep feeling'],
  ['WhatsApp Image 2026-07-31 at 7.19.59 PM.jpeg','After dark'],
  ['WhatsApp Image 2026-07-31 at 7.20.26 PM.jpeg','The conversation'],
  ['WhatsApp Image 2026-07-31 at 7.20.15 PM.jpeg','A moment suspended']
];
const galleryPhotos = [
  ...photos.map(([name, caption], index) => ({
    src: img(name), caption,
    alt: [
      'Close-up of Lady Ruth singing into a microphone',
      'Lady Ruth singing in a white dress amid stage smoke',
      'Lady Ruth singing in front of pink stage lighting',
      'Wide view of Lady Ruth performing on stage',
      'Lady Ruth singing in a red top under stage lights',
      'Lady Ruth singing in a black dress under red lights',
      'Lady Ruth singing in a red top against a green stage backdrop',
      'Lady Ruth singing in a white dress against a bright stage backdrop',
    ][index],
  })),
  { src: '/media/images/lady-ruth-portrait-1.jpg', caption: 'Lady Ruth · portrait', alt: 'Lady Ruth standing in a white outfit beside an arched alcove' },
  { src: '/media/images/lady-ruth-portrait-2.jpg', caption: 'Lady Ruth · portrait', alt: 'Lady Ruth in a white outfit in front of white curtains' },
  { src: '/media/images/group-portrait.webp', caption: 'Together · portrait', alt: 'Group portrait of people dressed in black' },
];
const testimonials: [string, string][] = [
  ['being_wurah', 'I would be lying if I said I didn’t feel goosebumps rush all over my body when I heard you sing. You’re damn good girl.'],
  ['omawonder', 'Vocal control, low register and the build up… 👏🏾👏🏾'],
  ['Essence💕', 'Listening to a very soothing voice like this brings more peace whilst listening.'],
  ['Riches', 'Okay this is lovely, but I don’t know why I am crying.']
];
const services: [string, string, string][] = [
  ['01','Hotel evenings','A polished, expressive set for lobbies, lounges and signature dining rooms.'],
  ['02','Fine dining','Intimate live music that gives a beautiful room its own pulse.'],
  ['03','Weddings & celebrations','A tailored soundtrack for entrances, dinners and once-in-a-lifetime toasts.'],
  ['04','Corporate & diplomatic','Discerning live entertainment for launches, receptions and private rooms.']
];
const socials = [
  ['Instagram', 'https://www.instagram.com/ladyruthsinger?utm_source=qr'],
  ['TikTok', 'https://www.tiktok.com/@lady.ruth.singer?_r=1&_t=ZS-98UsWxLGvmW'],
  ['Facebook', 'https://www.facebook.com/share/1EiWJcqShS/?mibextid=wwXIfr'],
  ['X', 'https://x.com/ladyruthsinger?s=11'],
  ['YouTube', 'https://youtube.com/@ladyruthdejavu?si=0pyK9Q-G8MRZUQa3'],
] as const;

function Arrow(){ return <span className="arrow">↗</span> }
export default function App(){
 const [lightboxIndex,setLightboxIndex]=useState<number | null>(null); const [sent,setSent]=useState(false);
 const [loadedIndex,setLoadedIndex]=useState<number | null>(null);
 const closeButtonRef=useRef<HTMLButtonElement>(null);
 const openerRef=useRef<HTMLButtonElement | null>(null);
 const isLightboxOpen=lightboxIndex!==null;
 useEffect(()=>{ const els=document.querySelectorAll('.reveal'); const ob=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12}); els.forEach(e=>ob.observe(e)); return()=>ob.disconnect(); },[]);
 useEffect(()=>{
  if(lightboxIndex===null) return;
  const previousOverflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  closeButtonRef.current?.focus();
  const onKeyDown=(event:KeyboardEvent)=>{
   if(event.key==='Escape') setLightboxIndex(null);
   if(event.key==='ArrowRight') setLightboxIndex(index=>index===null?null:(index+1)%galleryPhotos.length);
   if(event.key==='ArrowLeft') setLightboxIndex(index=>index===null?null:(index-1+galleryPhotos.length)%galleryPhotos.length);
   if(event.key==='Tab'){
    const controls=[closeButtonRef.current,...document.querySelectorAll<HTMLButtonElement>('.lightbox-prev,.lightbox-next')].filter((button):button is HTMLButtonElement=>button!==null);
    if(event.shiftKey&&document.activeElement===controls[0]){event.preventDefault();controls.at(-1)?.focus()}
    if(!event.shiftKey&&document.activeElement===controls.at(-1)){event.preventDefault();controls[0]?.focus()}
   }
  };
  window.addEventListener('keydown',onKeyDown);
  return()=>{document.body.style.overflow=previousOverflow;window.removeEventListener('keydown',onKeyDown);openerRef.current?.focus();};
 },[isLightboxOpen]);
 const openLightbox=(index:number,event:React.MouseEvent<HTMLButtonElement>)=>{openerRef.current=event.currentTarget;setLoadedIndex(null);setLightboxIndex(index)};
 const showPhoto=(index:number)=>{setLoadedIndex(null);setLightboxIndex((index+galleryPhotos.length)%galleryPhotos.length)};
 return <div className="site">
  <header className="nav"><a className="brand" href="#top"><span className="brand-mark">LR</span><span>Lady Ruth<br/><i>DéjàVu Band</i></span></a><nav><a href="#story">The story</a><a href="#repertoire">Repertoire</a><a href="#gallery">Gallery</a><a href="#booking">Enquire</a></nav><a className="nav-cta" href="#booking">Book the band <Arrow/></a></header>
  <main id="top">
   <section className="hero">
    <div className="hero-visual"><img src={img('WhatsApp Image 2026-07-31 at 7.19.59 PM.jpeg')} alt="Lady Ruth performing live on stage" fetchPriority="high" /></div>
    <div className="hero-shade"/>
    <div className="hero-content reveal"><p className="eyebrow">Lagos · Nigeria · Worldwide</p><h1>Premium live music.<br/><em>One unforgettable night.</em></h1><p className="hero-sub">Four languages. A voice that stays with you.<br/>Where every note feels like déjà vu.</p><a className="button gold" href="#booking">Plan your evening <Arrow/></a></div>
    <a className="hero-foot" href="#story"><span>Discover the story</span><span className="hero-line"/><span aria-hidden="true">↓</span></a>
   </section>
   <section id="story" className="story section reveal"><div className="section-kicker">01 <span>Meet the voice</span></div><div className="story-grid"><div className="portrait-wrap"><img src={img('WhatsApp Image 2026-07-31 at 7.20.21 PM.jpeg')} alt="Portrait of Lady Ruth Singer" loading="lazy" /><span className="portrait-caption">Ruth Asigoboka<br/><i>Lady Ruth Singer</i></span></div><div className="story-copy"><h2>A little <em>more</em><br/>than a live set.</h2><p className="lead">Lady Ruth Singer brings a rare kind of presence to the room: cinematic, precise and deeply human.</p><p>Ruth Asigoboka Paul Owubokiri, 26, is a vocalist from Ogu/Bolo in Rivers State, raised in Port Harcourt. She found her first audience in church at ten, then returned to the spotlight after a four year hiatus following her move to Lagos in 2019.</p><p>Today, she leads Lady Ruth’s DéjàVu Band, a premium live act moving effortlessly from French chanson and Italian classics to Spanish romance, jazz, soul and the R&amp;B records everyone knows by heart.</p><p>Lady Ruth rose to prominence on Nigerian Idol season 9 in 2024 with her soulful rendition of "You Say" by Lauren Daigle. Despite being evicted in June 2024, she went on to win the TECNO Jingle Contest for the TECNO CAMON 30, earning a ₦500,000 cash prize announced by guest judge Pheelz — a performance that showcased her creativity and musical versatility.</p><p>Off stage, she balances music with club promotion, tech school and cooking, calling singing her escape. Her journey on Nigerian Idol was as challenging as it was thrilling, and fans continue to follow her post-show endeavors across social platforms. Her association with the DéjàVu Band stems from her continued performances and collaborations after the show, blending soul and contemporary styles.</p><div className="badge"><span>✦</span><div><strong>Nigerian Idol Season 9</strong><small>Top 7 finalist · 2024</small></div></div></div></div></section>
   <section id="repertoire" className="repertoire section reveal"><div className="section-kicker">02 <span>The signature</span></div><div className="repertoire-head"><h2>Four languages.<br/><em>Infinite feeling.</em></h2><p>Lady Ruth performs in English, French, Italian and Spanish. Each set is carefully shaped around the audience, the atmosphere and the occasion, creating music that feels personal wherever the night takes place.</p></div><div className="languages"><div><b>EN</b><span>English</span></div><div><b>FR</b><span>Français</span></div><div><b>IT</b><span>Italiano</span></div><div><b>ES</b><span>Español</span></div></div><div className="genre-row"><span>Jazz</span><span>Soul</span><span>R&amp;B</span><span>International classics</span><span>French chanson</span></div></section>
   <section id="gallery" className="gallery section reveal"><div className="section-kicker">03 <span>On stage &amp; beyond</span></div><div className="gallery-head"><h2>Scenes from<br/><em>the feeling.</em></h2><p>Every performance is a room transformed. Select any frame to step closer.</p></div><div className="gallery-grid">{galleryPhotos.map((photo,i)=><button key={photo.src} type="button" className={`gallery-item item-${i+1}`} onClick={event=>openLightbox(i,event)} aria-label={`View photograph ${i+1} of ${galleryPhotos.length}: ${photo.caption}`}><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async"/><span>{photo.caption} <Arrow/></span></button>)}</div><div className="performance"><div className="performance-copy"><p className="eyebrow">Live performance</p><h3>Hear the moment.</h3><p>A closer look at Lady Ruth’s DéjàVu Band in performance.</p></div><video className="performance-video" controls playsInline preload="none" poster="/media/images/performance-poster.jpg" aria-label="Lady Ruth’s DéjàVu Band performance video"><source src="/media/videos/performance.mp4" type="video/mp4"/>Your browser does not support video playback.</video></div></section>
   <section className="words reveal"><div className="section-kicker">04 <span>In their words</span></div><div className="quote-grid">{testimonials.map(t=><blockquote key={t[0]}><span className="quote-mark">“</span><p>{t[1]}</p><cite>@{t[0]}</cite></blockquote>)}</div></section>
   <section className="services section reveal"><div className="section-kicker">05 <span>For your occasion</span></div><div className="services-head"><h2>Make it<br/><em>memorable.</em></h2><p>From a candlelit dinner to a room full of two hundred guests, we shape the energy around your occasion.</p></div><div className="service-grid">{services.map(s=><article key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><Arrow/></article>)}</div></section>
   <section id="booking" className="booking reveal"><div className="booking-copy"><div className="section-kicker">06 <span>Start a conversation</span></div><h2>Let’s make<br/><em>some magic.</em></h2><p>Tell us about the room, the mood and the moment you’re planning. We’ll be in touch within 48 hours.</p><div className="contact-list"><a href="mailto:ladyruthdejavu@gmail.com">ladyruthdejavu@gmail.com <Arrow/></a><div className="booking-socials">{socials.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label} <Arrow/></a>)}</div></div></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><span>✦</span><h3>Thank you for reaching out.</h3><p>Your note is on its way to Lady Ruth’s team.</p></div>:<><div className="form-row"><label>Your name<input required placeholder="Full name"/></label><label>Email address<input required type="email" placeholder="you@example.com"/></label></div><div className="form-row"><label>Event date<input type="date"/></label><label>Event type<select><option>Choose an occasion</option><option>Wedding</option><option>Corporate event</option><option>Private celebration</option><option>Hotel / fine dining</option></select></label></div><div className="form-row"><label>Location<input placeholder="City / venue"/></label><label>Guest count<input placeholder="Approximate number"/></label></div><label>Tell us about your vision<textarea rows={4} placeholder="The mood, the music, the moment…"/></label><button className="button gold" type="submit">Send inquiry <Arrow/></button></>}</form></section>
  </main>
  <footer><a className="brand" href="#top"><span className="brand-mark">LR</span><span>Lady Ruth<br/><i>DéjàVu Band</i></span></a><p>Premium live music for exceptional rooms.</p><div className="footer-links"><a href="mailto:ladyruthdejavu@gmail.com">Email</a>{socials.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label}</a>)}</div><small>© 2024 Lady Ruth’s DéjàVu Band · Lagos, Nigeria</small></footer>
  {lightboxIndex!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer" onClick={()=>setLightboxIndex(null)}><button ref={closeButtonRef} className="lightbox-close" type="button" aria-label="Close photograph viewer" onClick={()=>setLightboxIndex(null)}>×</button><button className="lightbox-prev" type="button" aria-label="Previous photograph" onClick={event=>{event.stopPropagation();showPhoto(lightboxIndex-1)}}>‹</button><figure onClick={event=>event.stopPropagation()} aria-busy={loadedIndex!==lightboxIndex}><div className="lightbox-image-wrap">{loadedIndex!==lightboxIndex&&<span className="lightbox-loading">Loading photograph…</span>}<img src={galleryPhotos[lightboxIndex].src} alt={galleryPhotos[lightboxIndex].alt} onLoad={()=>setLoadedIndex(lightboxIndex)}/></div><figcaption>{galleryPhotos[lightboxIndex].caption} <span>{lightboxIndex+1} / {galleryPhotos.length}</span></figcaption></figure><button className="lightbox-next" type="button" aria-label="Next photograph" onClick={event=>{event.stopPropagation();showPhoto(lightboxIndex+1)}}>›</button></div>}
 </div>
}
