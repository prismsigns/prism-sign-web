import React from 'react';
import {createRoot} from 'react-dom/client';
import {Phone, MessageCircle, ArrowRight, Menu, X, CheckCircle2, Factory, Ruler, Wrench, Mail, MapPin} from 'lucide-react';
import './style.css';

const A='/assets/';
const phone='7842778702';
 const phone2='8168778702';
const wa=`https://wa.me/91${phone}`;
const services=[
 ['LED Signage','Eye-catching back-lit text and printed light boxes.','p3-right.jpg'],
 ['Large & Super Wide Format Printing','High-volume printing for events, exhibitions, retail and more.','p6-right.jpg'],
 ['Raised Lettering','PVC, Aluminium, Acrylic, Wood and plant-based living Moss options.','p4-left.jpg'],
 ['Vehicle Graphics','Durable adhesive vinyl with clear UV laminate for vehicle contours.','p3-right.jpg'],
 ['Printeriors','Wall and floor graphics that bring brand personality into interiors.','p6-left.jpg'],
 ['Internal & External Signage','Professional signage solutions for inside and outside spaces.','p4-left.jpg'],
 ['Custom Made & Modular Signages','Tailored modular sign systems for different business needs.','p4-right.jpg'],
 ['Safety & Directional Signs','Practical signs suited for property, safety and navigation.','p5-right.jpg'],
 ['LED & Liquid Acrylic Signages','Illuminated signage solutions with a premium visual finish.','p5-left.jpg'],
 ['Reception & Wall / Glass Graphics','Reception branding, wall graphics and glass applications.','p6-left.jpg'],
 ['Eco Solvent & UV Printing','Print solutions for branded interiors and display applications.','p6-right.jpg'],
 ['Signages','Temporary or tailored sign solutions for specific requirements.','p5-right.jpg']
];
const equipment=['Channel Bending Machine','Liquid Acrylic Machine','Roland Eco Solvent Printing','Laser Machine','Vinyl / Plotter Cutter','Soniq HD Plus Colorjet Printing','CNC Router Machine','Lamination Machine'];
function App(){
 const [open,setOpen]=React.useState(false);
 const [quoteOpen,setQuoteOpen]=React.useState(false);
 const [quote,setQuote]=React.useState({type:'',name:'',phone:'',size:'',location:'',message:''});
 React.useEffect(()=>{const t=setInterval(()=>setQuoteOpen(true),20000);return()=>clearInterval(t)},[]);
 const scroll=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 const sendQuote=e=>{e.preventDefault();const text=`Prism Signs Quotation Request%0A%0ASign Type: ${quote.type}%0AName: ${quote.name}%0APhone: ${quote.phone}%0AApprox. Size: ${quote.size}%0ALocation: ${quote.location}%0ARequirement: ${quote.message}`;window.open(`https://wa.me/917842778702?text=${text}`,'_blank')};
 return <div className="site">
  <header className="oldHeader"><div className="wrap oldNav">
   <button className="oldBrand" onClick={()=>scroll('home')} aria-label="Prism Signs home"><img src={A+'prism-signs-logo.png'} alt="Prism Signs - The Signage Solution" /></button>
   <nav className={open?'oldLinks show':'oldLinks'}>
    <a className="oldPhone" href={`tel:+91${phone}`}><Phone size={15}/> {phone}</a>
    <button onClick={()=>scroll('services')}>Services</button><button onClick={()=>scroll('portfolio')}>Portfolio</button><button onClick={()=>scroll('process')}>Process</button><button onClick={()=>scroll('contact')}>Contact</button>
    <button className="oldQuote" onClick={()=>setQuoteOpen(true)}>Get a Quote ↗</button>
   </nav>
   <button className="oldMenu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div></header>

  <main>
   <section id="home" className="hero"><div className="wrap heroGrid"><div className="heroCopy">
    <p className="eyebrow">DESIGN / MANUFACTURE / INSTALL</p><h1>Your Vision<br/><span>Our Signage</span></h1>
    <p className="lead">Premium signage solutions in Hyderabad, designed around your brand and built for a strong visual presence.</p>
    <div className="ticks"><span><CheckCircle2/> Quality & Transparency</span><span><CheckCircle2/> Professional Service</span><span><CheckCircle2/> Customized Solutions</span></div>
    <div className="buttons"><a href={wa} target="_blank" className="primary"><MessageCircle/> Get Free Quote <ArrowRight/></a><button className="secondary" onClick={()=>scroll('services')}>Explore Services <ArrowRight/></button></div>
   </div><div className="heroVisual"><img src={A+'prism-hero-3d.jpg'} className="hero3d" alt="PRISM 3D illuminated signage"/><div className="floatingTag t1">LED + GLOW</div><div className="floatingTag t2">3D LETTERS</div></div></div></section>

   <section id="about" className="section about"><div className="wrap aboutGrid"><div><p className="eyebrow">ABOUT PRISM SIGNS</p><h2>Inventive signage, made simple.</h2><p>We always aim to make the signage process inventive, yet very simple. Our friendly and knowledgeable team works closely with customers from the designing process to final installation.</p><p>Our services extend from designing, manufacturing, installation and maintenance, with expert advice and proven solutions tailored to customized signage needs.</p></div><div className="vision"><h3>Our Vision</h3><p>To be <strong>ONE</strong> among the Top <strong>SIGNAGE SOLUTION PROVIDERS</strong> in the Region.</p><h3>Our Mission</h3><p>To provide professionalized services, identify the right solutions that exceed expectations, and make Quality, Professionalism and Passion the hallmarks of our company.</p></div></div></section>

   <section id="services" className="section services"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">OUR SERVICES</p><h2>Complete signage solutions</h2></div><p>From illuminated signs to printing, graphics and directional systems, the brochure's service range is organized here in a clean, easy-to-browse layout.</p></div><div className="serviceGrid">{services.map(([t,d,img])=><article className="serviceCard" key={t}><img src={A+img}/><div><h3>{t}</h3><p>{d}</p><a href={wa} target="_blank">Get a quote <ArrowRight size={15}/></a></div></article>)}</div></div></section>

   <section id="portfolio" className="section portfolio"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">BROCHURE VISUALS</p><h2>Work & signage applications</h2></div><p>Every visual panel below is taken from the brochure and grouped by the application it represents, keeping the page spacious instead of cluttered.</p></div><div className="visualGrid">
    <figure><img src={A+'p4-left.jpg'}/><figcaption>Internal & External Signage</figcaption></figure><figure><img src={A+'p4-right.jpg'}/><figcaption>Custom Made & Modular Signages</figcaption></figure><figure><img src={A+'p5-left.jpg'}/><figcaption>LED & Liquid Acrylic Signages</figcaption></figure><figure><img src={A+'p5-right.jpg'}/><figcaption>Safety & Directional Signs</figcaption></figure><figure><img src={A+'p6-left.jpg'}/><figcaption>Reception & Wall / Glass Graphics</figcaption></figure><figure><img src={A+'p6-right.jpg'}/><figcaption>Eco Solvent & UV Printing</figcaption></figure>
   </div></div></section>

   <section id="equipment" className="section equipment"><div className="wrap equipmentGrid"><div><p className="eyebrow">OUR EQUIPMENT</p><h2>Built with the right tools</h2><p>The brochure highlights a production setup covering bending, acrylic work, printing, laser cutting, routing, vinyl cutting and lamination.</p><div className="equipList">{equipment.map(e=><div key={e}><Factory size={17}/>{e}</div>)}</div></div><div className="equipImage"><img src={A+'p3-left.jpg'}/></div></div></section>

   <section id="process" className="section process"><div className="wrap"><p className="eyebrow">HOW WE WORK</p><h2>A simple path from idea to installation</h2><div className="processGrid"><div><b>01</b><h3>Share your requirements</h3><p>Tell us what you need, including design, size, material and location.</p></div><div><b>02</b><h3>Get the right solution</h3><p>We discuss the suitable signage and production approach for your requirement.</p></div><div><b>03</b><h3>Manufacture & install</h3><p>From manufacturing to final installation, the team stays involved.</p></div></div></div></section>

   <section id="contact" className="contact"><div className="wrap contactBox"><div><p className="eyebrow">LET'S BUILD YOUR SIGNAGE</p><h2>Ready to make your brand stand out?</h2><p>Contact Prism Signs for customized signage needs in Hyderabad.</p></div><a href={wa} target="_blank" className="primary"><MessageCircle/> WhatsApp 7842778702 <ArrowRight/></a></div></section>
  </main>
  <footer><div className="wrap footerGrid"><div><img src={A+'prism-signs-logo.png'} className="footerLogo" alt="Prism Signs - The Signage Solution"/><p>The complete signage solution for customized business signage.</p></div><div><h4>Contact</h4><p><Phone/> +91 7842778702</p><p><Phone/> +91 8168778702</p><p><Mail/> amarjeet@prismsigns.co</p></div><div><h4>Office Address</h4><p><MapPin/> Plot No: 10&amp;11, Shed No: 46, IDA Cherlapally Phase-2, Hyderabad-500051, Telangana.</p></div></div><div className="copyright">© 2026 Prism Signs. All rights reserved.</div></footer>
  <a className="floatWa" href={wa} target="_blank"><MessageCircle/></a>
  {quoteOpen&&<div className="quoteOverlay" onMouseDown={e=>{if(e.target===e.currentTarget)setQuoteOpen(false)}}><div className="quoteModal"><button className="quoteClose" onClick={()=>setQuoteOpen(false)} aria-label="Close quotation form"><X/></button><div className="quoteModalHead"><p className="eyebrow">GET A FREE QUOTE</p><h2>Tell us about your signage requirement</h2><p>Share a few details and we’ll get back to you with the best solution.</p></div><form onSubmit={sendQuote}><div className="quoteFields"><select required value={quote.type} onChange={e=>setQuote({...quote,type:e.target.value})}><option value="">Select Sign Type</option>{services.map(([t])=><option key={t}>{t}</option>)}</select><input required placeholder="Your Name" value={quote.name} onChange={e=>setQuote({...quote,name:e.target.value})}/><input required placeholder="Phone Number" inputMode="tel" value={quote.phone} onChange={e=>setQuote({...quote,phone:e.target.value})}/><input placeholder="Approx. Size (e.g. 10 ft)" value={quote.size} onChange={e=>setQuote({...quote,size:e.target.value})}/><input required placeholder="Your Location (e.g. Hyderabad)" value={quote.location} onChange={e=>setQuote({...quote,location:e.target.value})}/><textarea required placeholder="Tell us about your requirement..." rows="4" value={quote.message} onChange={e=>setQuote({...quote,message:e.target.value})}/></div><button className="primary quoteSubmit" type="submit"><MessageCircle/> Send via WhatsApp <ArrowRight/></button></form></div></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
