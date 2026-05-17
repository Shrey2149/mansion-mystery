import React, { useState, useEffect, useMemo, useRef } from "react";
import backgroundImg from "../assets/instructions-bg.png";
import noidaImg from "../assets/Noida.png";
import firstImg from "../assets/1img.png"
import secondImg from "../assets/2img.png"
import thirdImg from "../assets/3img.png"
import fourthImg from "../assets/4img.png"
import fifthImg from "../assets/5img.png"
import sixthImg from "../assets/6img.png"
import seventhImg from "../assets/7img.png"
import logoImg from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";

export default function GreaterNoidaInfo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);
  const datesSectionRef = useRef(null);
  const privateExperienceSectionRef = useRef(null);

  const scrollToDates = () => {
    datesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrivateExperience = () => {
    privateExperienceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "The Game", href: "/#about-game" },
    { name: "Locations", href: "/#locations" },
    { name: "FAQs", href: "/#faqs" },
    { name: "The Architect", href: "/creator" }
  ];
  const propertyImages = useMemo(() => [
    firstImg,
    secondImg,
    thirdImg,
    fourthImg,
    fifthImg,
    sixthImg,
    seventhImg
  ], []);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = propertyImages.map((src, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setAllImagesPreloaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setAllImagesPreloaded(true);
      }
    };

    preloadImages();
  }, [propertyImages]);

  const showDates = [
    { month: 'JULY', day: 5, label: 'JULY', soldOut: false },
    { month: 'JULY', day: 12, label: 'JULY', soldOut: false },
    { month: 'JULY', day: 19, label: 'JULY', soldOut: false },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) setIsMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const changeImage = (newIndex) => {
    if (newIndex !== currentImageIndex) setCurrentImageIndex(newIndex);
  };
  const nextImage = () => changeImage(currentImageIndex === propertyImages.length - 1 ? 0 : currentImageIndex + 1);
  const prevImage = () => changeImage(currentImageIndex === 0 ? propertyImages.length - 1 : currentImageIndex - 1);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }
        html { scroll-behavior: smooth; }

        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .wavy-letter { display: inline-block; animation: wave 5s ease-in-out infinite; }
        .wavy-letter:nth-child(1) { animation-delay: 0s; }
        .wavy-letter:nth-child(2) { animation-delay: 0.1s; }
        .wavy-letter:nth-child(3) { animation-delay: 0.2s; }
        .wavy-letter:nth-child(4) { animation-delay: 0.3s; }
        .wavy-letter:nth-child(5) { animation-delay: 0.4s; }
        .wavy-letter:nth-child(6) { animation-delay: 0.5s; }
        .wavy-letter:nth-child(7) { animation-delay: 0.6s; }
        .wavy-letter:nth-child(8) { animation-delay: 0.7s; }
        .wavy-letter:nth-child(9) { animation-delay: 0.8s; }
        .wavy-letter:nth-child(10) { animation-delay: 0.9s; }
        .wavy-letter:nth-child(11) { animation-delay: 1s; }
        .wavy-letter:nth-child(12) { animation-delay: 1.1s; }
        .wavy-letter:nth-child(13) { animation-delay: 1.2s; }
        .wavy-letter:nth-child(14) { animation-delay: 1.3s; }

        .gn-nav {
          background: rgba(10, 10, 18, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
        }
        .gn-nav-link {
          font-family: var(--font-body); color: var(--text-secondary);
          text-decoration: none; padding: 0.6rem 1rem; font-size: 0.875rem;
          font-weight: 500; letter-spacing: 0.04em; position: relative; transition: color 0.3s ease;
        }
        .gn-nav-link:hover { color: var(--gold-light); }
        .gn-mobile-menu {
          max-height: 0; overflow: hidden; transition: max-height 0.4s ease;
          background: rgba(10, 10, 18, 0.97); backdrop-filter: blur(24px);
        }
        .gn-mobile-menu.open { max-height: 400px; }
        .gn-mobile-menu .gn-nav-link { font-size: 1rem; padding: 0.875rem 1.25rem; display: block; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.04); }

        .gn-hero {
          position: relative; min-height: 100vh;
          background-image: url(${backgroundImg}); background-size: cover;
          background-position: center; background-attachment: fixed;
        }
        .gn-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.04) 0%, transparent 60%),
            linear-gradient(180deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.3) 50%, rgba(10,10,15,0.5) 100%);
          z-index: 0;
        }
        .gn-hero::after { content: ''; position: absolute; inset: 0; background: rgba(10,10,15,0.25); z-index: 0; }

        .gn-content-wrap {
          position: relative; z-index: 10; display: flex; align-items: center;
          justify-content: space-between; padding: 2rem 4rem 1rem; min-height: 100vh;
          max-width: 1400px; margin: 0 auto;
        }
        .gn-text { flex: 1; margin-right: 3rem; max-width: 600px; }
        .gn-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem); margin-bottom: 3rem; text-align: center;
          color: var(--text-primary); white-space: nowrap; font-family: var(--font-heading);
        }
        .gn-list { font-size: 1.15rem; margin-top: 2rem; line-height: 2.5; color: var(--text-secondary); font-family: Avenir, sans-serif; }
        .gn-list > div { margin-bottom: 0.75rem; }
        .gn-img-side { flex-shrink: 0; display: flex; align-items: center; }
        .gn-carousel-container {
          position: relative; width: 500px; height: 320px; overflow: hidden;
          border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }
        .gn-carousel-track {
          display: flex; width: ${propertyImages.length * 100}%; height: 100%;
          transform: translateX(-${currentImageIndex * (100 / propertyImages.length)}%);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gn-carousel-slide { width: ${100 / propertyImages.length}%; height: 100%; flex-shrink: 0; }
        .gn-carousel-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .gn-carousel-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(0,0,0,0.6); color: white; border: none;
          padding: 12px 16px; border-radius: 50%; cursor: pointer;
          font-size: 20px; transition: all 0.3s ease; z-index: 10; user-select: none;
        }
        .gn-carousel-arrow:hover { background: rgba(0,0,0,0.8); transform: translateY(-50%) scale(1.1); }
        .gn-carousel-arrow.prev { left: 15px; }
        .gn-carousel-arrow.next { right: 15px; }
        .gn-image-counter {
          position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
          background: rgba(0,0,0,0.7); color: white; padding: 8px 20px;
          border-radius: 25px; font-size: 14px; font-weight: 600; z-index: 10; backdrop-filter: blur(5px);
        }
        .gn-loading-spinner { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: rgba(0,0,0,0.3); border-radius: 12px; }
        .gn-spinner { width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.3); border-top: 4px solid #E8E3E3; border-radius: 50%; animation: gn-spin 1s linear infinite; }
        @keyframes gn-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .gn-dates-section {
          position: relative; background-image: url(${backgroundImg}); background-size: cover;
          background-position: center; background-attachment: fixed; padding-bottom: 4rem;
        }
        .gn-dates-section::after { content: ''; position: absolute; inset: 0; background: rgba(10,10,15,0.8); z-index: 0; }
        .gn-dates-header { position: relative; z-index: 1; padding: 3rem 0 1rem; text-align: center; }
        .gn-dates-header h2 { font-family: var(--font-heading); font-size: 2.5rem; font-weight: 700; color: var(--text-primary) !important; letter-spacing: 0.05em; }
        .gn-dates-grid {
          position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 2rem;
          padding: 3rem 4rem; max-width: 1200px; margin: 0 auto; justify-content: center;
        }
        .gn-date-card { width: 160px; cursor: pointer; transition: transform 0.3s ease; text-align: center; }
        .gn-date-card:hover { transform: translateY(-6px); }
        .gn-date-card-img {
          position: relative; width: 160px; height: 180px; border-radius: 8px; overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3); border: 1px solid rgba(201,168,76,0.15);
        }
        .gn-date-card-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .gn-date-badge {
          position: absolute; top: 8px; right: 8px; background: #fff; border-radius: 4px;
          padding: 4px 8px; text-align: center; min-width: 42px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
        .gn-date-badge-month { font-size: 0.55rem; font-weight: 700; color: #333 !important; letter-spacing: 0.08em; text-transform: uppercase; line-height: 1; display: block; margin-bottom: 1px; }
        .gn-date-badge-day { font-size: 1.25rem; font-weight: 700; color: #222 !important; line-height: 1.1; display: block; }
        .gn-date-card-label { margin-top: 0.6rem; font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--text-secondary) !important; text-transform: uppercase; letter-spacing: 0.08em; }

        .gn-cta-btn {
          background: linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 100%);
          color: var(--gold-light); border: 1.5px solid var(--gold); padding: 14px 28px;
          border-radius: 50px; font-size: 0.9rem; font-family: var(--font-body); font-weight: 600;
          cursor: pointer; transition: all 0.3s ease; white-space: nowrap;
          letter-spacing: 0.06em; text-transform: uppercase; backdrop-filter: blur(8px);
        }
        .gn-cta-btn:hover { box-shadow: 0 0 25px rgba(201,168,76,0.2); transform: translateY(-2px); }

        @media (max-width: 768px) {
          .gn-hero { background-attachment: scroll; }
          .gn-content-wrap { flex-direction: column; padding: 5rem 1.5rem 2rem; align-items: center; }
          .gn-text { width: 100%; margin-right: 0; margin-bottom: 3rem; max-width: 100%; }
          .gn-title { font-size: 1.75rem; margin-bottom: 2rem; text-align: center; line-height: 1.3; white-space: normal; }
          .gn-list { font-size: 1rem; padding: 0 0.5rem; text-align: left; line-height: 2; }
          .gn-img-side { width: 100%; display: flex; justify-content: center; }
          .gn-carousel-container { width: 90%; max-width: 350px; height: 240px; }
          .gn-dates-header h2 { font-size: 2rem; }
          .gn-dates-grid { padding: 2rem 1.5rem; gap: 1.25rem; }
          .gn-date-card { width: 140px; }
          .gn-date-card-img { width: 140px; height: 160px; }
        }
        @media (max-width: 480px) {
          .gn-content-wrap { padding: 5rem 1rem 2rem; }
          .gn-title { font-size: 1.25rem; }
          .gn-list { font-size: 0.85rem; line-height: 1.8; }
          .gn-carousel-container { max-width: 280px; height: 200px; }
          .gn-dates-header h2 { font-size: 1.5rem; }
          .gn-dates-grid { padding: 1.5rem 1rem; gap: 1rem; }
          .gn-date-card { width: 120px; }
          .gn-date-card-img { width: 120px; height: 140px; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="gn-nav">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
            <Link to="/"><img src={logoImg} alt="Mystery Mansion Logo" style={{ height: '56px', width: 'auto', filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.1))' }} /></Link>
            <div className="hidden md:block">
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {navItems.map((item, i) => item.href.startsWith('/#') || item.href.startsWith('#')
                  ? <a key={i} href={item.href} className="gn-nav-link">{item.name}</a>
                  : <Link key={i} to={item.href} className="gn-nav-link">{item.name}</Link>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }} style={{ color: 'var(--text-secondary)', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}>
                <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
          <div className={`md:hidden gn-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item, i) => item.href.startsWith('/#') || item.href.startsWith('#')
              ? <a key={i} href={item.href} className="gn-nav-link" onClick={() => setIsMenuOpen(false)}>{item.name}</a>
              : <Link key={i} to={item.href} className="gn-nav-link" onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero / Property Info */}
      <section className="gn-hero">
        {/* Booking CTA */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', paddingTop: '110px', paddingBottom: '60px', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', maxWidth: '900px', padding: '0 1rem' }}>
            <button className="gn-cta-btn" onClick={scrollToDates}>Join a Scheduled Mystery</button>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontFamily: 'var(--font-body)', lineHeight: '1.6', margin: 0, maxWidth: '400px', textAlign: 'center' }}>
              Book seats for our upcoming mystery events on pre-announced dates and solve the case with other guests.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '200px', margin: '0.5rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }}></div>
            <span style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.15em' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }}></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', maxWidth: '900px', padding: '0 1rem' }}>
            <button className="gn-cta-btn" onClick={scrollToPrivateExperience}>Book a Private Mystery</button>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontFamily: 'var(--font-body)', lineHeight: '1.6', margin: 0, maxWidth: '400px', textAlign: 'center' }}>
              Reserve the entire experience for your group on a date of your choice (subject to availability).
            </p>
          </div>
        </div>

        {/* Property details + image */}
        <div className="gn-content-wrap">
          <div className="gn-text">
            <h1 className="font-bold gn-title">
              {"About The Property (Greater Noida)".split('').map((letter, index) => (
                <span key={index} className="wavy-letter">{letter === ' ' ? '\u00A0' : letter}</span>
              ))}
            </h1>
            <div className="gn-list">
              <div>Spacious villa with elegant interiors—perfect for mystery and intrigue</div>
              <div>Multiple bedrooms and bathrooms for comfortable group stays</div>
              <div>Lush outdoor spaces and garden areas to explore</div>
              <div>Indoor entertainment and games to keep the suspense alive</div>
              <div>BYOB — your drinks, our bar can brew suspense for you</div>
              <div>Dining available on order—fuel your next move</div>
              <div>Ideal for 8–12 guests, where camaraderie and secrets intertwine</div>
              <div>Check-in from 5pm, check-out by 10am</div>
            </div>
          </div>
          <div className="gn-img-side">
            {!allImagesPreloaded ? (
              <div className="gn-carousel-container">
                <div className="gn-loading-spinner"><div className="gn-spinner"></div></div>
              </div>
            ) : (
              <div className="gn-carousel-container">
                <button onClick={prevImage} className="gn-carousel-arrow prev" aria-label="Previous image">←</button>
                <div className="gn-carousel-track">
                  {propertyImages.map((image, index) => (
                    <div key={index} className="gn-carousel-slide">
                      <img src={image} alt={`Greater Noida property view ${index + 1}`} loading={index < 3 ? "eager" : "lazy"} />
                    </div>
                  ))}
                </div>
                <button onClick={nextImage} className="gn-carousel-arrow next" aria-label="Next image">→</button>
                <div className="gn-image-counter">{currentImageIndex + 1} / {propertyImages.length}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Show Dates */}
      <section className="gn-dates-section" ref={datesSectionRef}>
        <div className="gn-dates-header"><h2>Select an Event Date</h2></div>
        <div className="gn-dates-grid">
          {showDates.map((date, i) => (
            <div key={i} className="gn-date-card">
              <div className="gn-date-card-img">
                <img src={noidaImg} alt={`${date.label} ${date.day}`} />
                <div className="gn-date-badge">
                  <span className="gn-date-badge-month">{date.month}</span>
                  <span className="gn-date-badge-day">{date.day}</span>
                </div>
              </div>
              <div className="gn-date-card-label">{date.label}</div>
            </div>
          ))}
        </div>
        {/* WhatsApp Contact */}
        <div style={{ position: 'relative', zIndex: 1, padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Avenir, sans-serif', fontSize: '1.2rem', color: '#E8E3E3', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            To book your experience for any date, contact us now on WhatsApp
          </p>
          <a href="https://wa.me/918279845322?text=Hi%20Mystery%20Mansion,%20I%20would%20like%20to%20book%20an%20experience%20at%20Greater%20Noida" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '12px 28px', backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontFamily: 'Avenir, sans-serif', fontWeight: 600, fontSize: '1rem', transition: 'all 0.3s ease' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488z" /></svg>
            +91 8279845322
          </a>
        </div>
      </section>

      {/* Private Experience */}
      <section className="gn-dates-section" ref={privateExperienceSectionRef}>
        <div className="gn-dates-header"><h2>Book a Private Mystery</h2></div>
        <div style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem', maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ fontFamily: 'Avenir, sans-serif', fontSize: '1.5rem', fontWeight: 600, color: '#D4AF37', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Exclusive Group Experience
              </div>
              <div style={{ fontFamily: 'Avenir, sans-serif', fontSize: '1.1rem', lineHeight: '1.8', color: '#E8E3E3', maxWidth: '450px' }}>
                <p>Reserve the entire mansion for a private night of mystery and intrigue. With the complete experience dedicated to your group, you and your guests will step into an unfolding story filled with hidden clues, unexpected twists, and secrets waiting to be discovered.</p>
                <p>Choose your preferred date, gather your team of investigators, and work together to unravel the mystery before the night is over.</p>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '450px', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 16px 48px rgba(0,0,0,0.5)', transition: 'all 0.4s ease', cursor: 'pointer' }}>
                <img src={noidaImg} alt="Private mystery mansion experience" style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '2rem 1.5rem 1.5rem', color: '#fff', fontFamily: 'Avenir, sans-serif', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Step into mystery. Uncover secrets. Create memories.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
