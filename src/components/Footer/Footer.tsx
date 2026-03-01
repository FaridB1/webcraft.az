import styles from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.left}>
          <h2>Qiymət təklifi al</h2>
          <a href="/order" className={styles.cta}>
            Sifariş et ↗
          </a>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.info}>
            <span>Əlaqə nömrəsi</span>
            <a href="tel:+994703107666">(+994) 70-310-76-66</a>
          </div>

          <div className={styles.info}>
            <span>Email</span>
            <a href="mailto:info@webcraft.az">info@webcraft.az</a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/webcraft.az"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/994703107666"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>

            <a href="mailto:info@webcraft.az">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Webcraft. All rights reserved.</span>
        <div className={styles.links}>
          <a href="/">Ana səhifə</a>
          <a href="/about">Haqqımızda</a>
          <a href="/#services">Xidmətlər</a>
          <a href="/#projects">Portfolio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;











// import { useEffect, useRef, useState } from "react";

// /* ─── SVG ICONS ─── */
// const IconFb   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
// const IconIg   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>;
// const IconWa   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>;
// const IconTk   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.23 8.23 0 0 0 4.81 1.54V6.77a4.85 4.85 0 0 1-1.04-.08z"/></svg>;
// const IconMail = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
// const IconArrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;

// const SOCIALS = [
//   { icon: <IconFb />,   href: "https://facebook.com/",            label: "Facebook"  },
//   { icon: <IconIg />,   href: "https://instagram.com/webcraft.az",label: "Instagram" },
//   { icon: <IconWa />,   href: "https://wa.me/994703107666",        label: "WhatsApp"  },
//   { icon: <IconTk />,   href: "https://tiktok.com/",              label: "TikTok"    },
//   { icon: <IconMail />, href: "mailto:info@webcraft.az",           label: "Email"     },
// ];

// const NAV = [
//   { label: "Ana səhifə", href: "/" },
//   { label: "Haqqımızda", href: "/about" },
//   { label: "Xidmətlər",  href: "/#services" },
//   { label: "Portfolio",  href: "/#projects" },
// ];

// const TICKER_TEXT = Array(10).fill(
//   "WEBCRAFT \u25C6 VEB SAYTLAR \u25C6 DİZAYN \u25C6 BRENDING \u25C6 UX/UI \u25C6 DEVELOPMENT \u25C6 "
// ).join("");

// /* ─── COMPONENT ─── */
// export default function Footer() {
//   const [vis, setVis] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.05 });
//     if (ref.current) io.observe(ref.current);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;1,300&family=Barlow+Condensed:wght@500;600;700&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         /* ── VARIABLES ── */
//         .ft {
//           --a:  #eb9f25;
//           --a2: #f7c860;
//           --a3: #c07a10;
//           --ink: #0c0c0c;
//           --ink2: #1a1a1a;
//           --muted: #888;
//           --line: rgba(0,0,0,0.09);
//           --bg: #ffffff;
//           font-family: 'Barlow', sans-serif;
//           background: var(--bg);
//           color: var(--ink);
//           position: relative;
//           overflow: hidden;
//         }

//         /* ── SUBTLE GRID TEXTURE ── */
//         .ft::before {
//           content: '';
//           position: absolute; inset: 0; z-index: 0; pointer-events: none;
//           background-image:
//             linear-gradient(rgba(235,159,37,0.025) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(235,159,37,0.025) 1px, transparent 1px);
//           background-size: 60px 60px;
//         }

//         /* Amber corner wash */
//         .ft::after {
//           content: '';
//           position: absolute;
//           bottom: -200px; right: -200px;
//           width: 700px; height: 700px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(235,159,37,0.07) 0%, transparent 65%);
//           pointer-events: none; z-index: 0;
//         }

//         .ft-z { position: relative; z-index: 1; }

//         /* ── TOP AMBER STRIPE ── */
//         .ft-stripe {
//           height: 4px;
//           background: linear-gradient(90deg, var(--a3), var(--a), var(--a2), var(--a), var(--a3));
//           background-size: 200% 100%;
//           animation: stripe-slide 4s linear infinite;
//         }
//         @keyframes stripe-slide {
//           0%   { background-position: 0% 0%; }
//           100% { background-position: 200% 0%; }
//         }

//         /* ── TICKER ── */
//         .ft-ticker {
//           border-bottom: 1px solid var(--line);
//           overflow: hidden;
//           padding: 12px 0;
//           background: var(--bg);
//         }
//         .ft-ticker-inner {
//           display: flex;
//           white-space: nowrap;
//         }
//         .ft-ticker-text {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 10.5px;
//           font-weight: 600;
//           letter-spacing: 0.26em;
//           color: var(--a);
//           flex-shrink: 0;
//           animation: ticker 30s linear infinite;
//           padding-right: 0;
//         }
//         @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

//         /* ── HERO SECTION ── */
//         .ft-hero {
//           max-width: 1320px;
//           margin: 0 auto;
//           padding: clamp(70px,9vw,110px) clamp(24px,5vw,60px) 0;
//           display: grid;
//           grid-template-columns: 1fr auto;
//           align-items: flex-start;
//           gap: clamp(40px,6vw,100px);
//         }

//         /* stagger animations */
//         .ft-anim {
//           opacity: 0;
//           transform: translateY(32px);
//           transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1);
//         }
//         .ft-anim-l {
//           opacity: 0;
//           transform: translateX(-28px);
//           transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1);
//         }
//         .ft-anim-r {
//           opacity: 0;
//           transform: translateX(28px);
//           transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1);
//         }
//         .ft.vis .ft-anim   { opacity: 1; transform: translateY(0); }
//         .ft.vis .ft-anim-l { opacity: 1; transform: translateX(0); }
//         .ft.vis .ft-anim-r { opacity: 1; transform: translateX(0); }
//         .ft.vis .d1 { transition-delay: 0s; }
//         .ft.vis .d2 { transition-delay: 0.1s; }
//         .ft.vis .d3 { transition-delay: 0.18s; }
//         .ft.vis .d4 { transition-delay: 0.26s; }
//         .ft.vis .d5 { transition-delay: 0.34s; }
//         .ft.vis .d6 { transition-delay: 0.42s; }
//         .ft.vis .d7 { transition-delay: 0.50s; }

//         /* Eyebrow */
//         .ft-eyebrow {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 10.5px;
//           font-weight: 700;
//           letter-spacing: 0.28em;
//           text-transform: uppercase;
//           color: var(--a);
//           margin-bottom: 22px;
//         }
//         .ft-dot {
//           width: 7px; height: 7px; border-radius: 50%;
//           background: var(--a);
//           animation: blink 2.5s ease infinite;
//         }
//         @keyframes blink { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.55)} }
//         .ft-eyebrow-line { flex: 1; max-width: 50px; height: 1px; background: linear-gradient(90deg,var(--a),transparent); }

//         /* Giant headline */
//         .ft-h1 {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(58px, 9vw, 112px);
//           line-height: 0.9;
//           letter-spacing: 0.015em;
//           color: var(--ink);
//         }
//         /* Amber stroke outline text */
//         .ft-h1-outline {
//           -webkit-text-stroke: 2px var(--a);
//           color: transparent;
//           display: block;
//         }
//         .ft-h1-solid { display: block; color: var(--ink); }

//         /* Sub */
//         .ft-sub {
//           font-size: 14px;
//           font-weight: 300;
//           color: var(--muted);
//           line-height: 1.82;
//           max-width: 380px;
//           margin-top: 26px;
//           letter-spacing: 0.02em;
//         }

//         /* CTA — sharp cut corner */
//         .ft-cta-wrap { margin-top: 40px; }
//         .ft-cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 14px;
//           background: var(--ink);
//           color: #fff;
//           text-decoration: none;
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           padding: 18px 36px;
//           clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
//           position: relative;
//           overflow: hidden;
//           transition: color 0.3s, transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s;
//         }
//         .ft-cta::before {
//           content: '';
//           position: absolute; inset: 0;
//           background: var(--a);
//           clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.4s cubic-bezier(.22,1,.36,1);
//         }
//         .ft-cta:hover::before { transform: scaleX(1); }
//         .ft-cta:hover { color: var(--ink); transform: translate(4px,-4px); box-shadow: -4px 4px 0 var(--a); }
//         .ft-cta span, .ft-cta svg { position: relative; z-index: 1; }
//         .ft-cta svg { transition: transform 0.3s ease; }
//         .ft-cta:hover svg { transform: translateX(5px); }

//         /* ── RIGHT: STATS + CONTACT ── */
//         .ft-right {
//           display: flex;
//           flex-direction: column;
//           gap: 0;
//           align-self: stretch;
//           justify-content: flex-start;
//           border-left: 1px solid var(--line);
//           padding-left: clamp(30px,4vw,60px);
//           padding-top: clamp(70px,9vw,110px);
//           padding-bottom: 40px;
//         }

//         /* Stats row */
//         .ft-stats {
//           display: grid;
//           grid-template-columns: 1fr 1px 1fr;
//           border: 1px solid var(--line);
//           margin-bottom: 40px;
//         }
//         .ft-stat-div { background: var(--line); }
//         .ft-stat {
//           padding: 22px 26px;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }
//         .ft-stat-n {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: 44px;
//           line-height: 1;
//           color: var(--a);
//           letter-spacing: 0.02em;
//         }
//         .ft-stat-l {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 10px;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: var(--muted);
//         }

//         /* Contact cards */
//         .ft-contacts { display: flex; flex-direction: column; gap: 28px; margin-bottom: 36px; }
//         .ft-card {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           border-left: 3px solid var(--a);
//           padding-left: 14px;
//         }
//         .ft-card-tag {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 9.5px;
//           font-weight: 700;
//           letter-spacing: 0.24em;
//           text-transform: uppercase;
//           color: var(--a);
//         }
//         .ft-card a {
//           font-size: clamp(14px,1.8vw,18px);
//           font-weight: 500;
//           color: var(--ink);
//           text-decoration: none;
//           letter-spacing: 0.01em;
//           position: relative;
//           width: fit-content;
//           transition: color 0.2s;
//         }
//         .ft-card a::after {
//           content: '';
//           position: absolute; bottom: -1px; left: 0; right: 0; height: 1px;
//           background: var(--a);
//           transform: scaleX(0); transform-origin: right;
//           transition: transform 0.3s cubic-bezier(.22,1,.36,1);
//         }
//         .ft-card a:hover { color: var(--a); }
//         .ft-card a:hover::after { transform: scaleX(1); transform-origin: left; }

//         /* Social icons — square tiles */
//         .ft-socials { display: flex; gap: 0; width: fit-content; border: 1px solid var(--line); }
//         .ft-soc {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 42px; height: 42px;
//           color: var(--muted);
//           text-decoration: none;
//           position: relative; overflow: hidden;
//           border-right: 1px solid var(--line);
//           transition: color 0.25s;
//         }
//         .ft-soc:last-child { border-right: none; }
//         .ft-soc::before {
//           content: '';
//           position: absolute; bottom: 0; left: 0; right: 0; height: 0;
//           background: var(--a);
//           transition: height 0.3s cubic-bezier(.22,1,.36,1);
//         }
//         .ft-soc:hover { color: #fff; }
//         .ft-soc:hover::before { height: 100%; }
//         .ft-soc svg { position: relative; z-index: 1; }

//         /* ── MARQUEE DIVIDER LINE ── */
//         .ft-mid {
//           max-width: 1320px; margin: clamp(50px,7vw,80px) auto 0;
//           padding: 0 clamp(24px,5vw,60px);
//         }
//         .ft-hr {
//           height: 1px;
//           background: var(--line);
//           position: relative;
//           opacity: 0;
//           transition: opacity 0.8s 0.55s ease;
//         }
//         .ft.vis .ft-hr { opacity: 1; }
//         /* amber travelling dash */
//         .ft-hr::after {
//           content: '';
//           position: absolute; top: -1px; left: 0;
//           width: 80px; height: 3px;
//           background: linear-gradient(90deg, transparent, var(--a), transparent);
//           animation: dash-travel 3s ease-in-out infinite;
//         }
//         @keyframes dash-travel {
//           0%   { left: 0; opacity: 0; }
//           10%  { opacity: 1; }
//           90%  { opacity: 1; }
//           100% { left: calc(100% - 80px); opacity: 0; }
//         }

//         /* ── BOTTOM BAR ── */
//         .ft-bottom {
//           max-width: 1320px; margin: 0 auto;
//           padding: 26px clamp(24px,5vw,60px) 30px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px; flex-wrap: wrap;
//           opacity: 0; transform: translateY(12px);
//           transition: opacity 0.8s 0.7s ease, transform 0.8s 0.7s ease;
//         }
//         .ft.vis .ft-bottom { opacity: 1; transform: translateY(0); }

//         .ft-copy {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 12px;
//           font-weight: 500;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: var(--muted);
//         }
//         .ft-copy strong { color: var(--ink); font-weight: 700; }
//         .ft-copy strong em { color: var(--a); font-style: normal; }

//         .ft-nav { display: flex; list-style: none; gap: 0; }
//         .ft-nav li { border-left: 1px solid var(--line); }
//         .ft-nav li:last-child { border-right: 1px solid var(--line); }
//         .ft-nav a {
//           display: block;
//           padding: 7px 18px;
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 11px; font-weight: 600;
//           letter-spacing: 0.16em; text-transform: uppercase;
//           color: var(--muted); text-decoration: none;
//           position: relative; overflow: hidden;
//           transition: color 0.25s;
//         }
//         .ft-nav a::before {
//           content: '';
//           position: absolute; bottom: 0; left: 0; right: 0; height: 0;
//           background: var(--a);
//           transition: height 0.25s ease;
//         }
//         .ft-nav a:hover { color: #fff; }
//         .ft-nav a:hover::before { height: 100%; }
//         .ft-nav a span { position: relative; z-index: 1; }

//         /* ── GIANT WATERMARK ── */
//         .ft-wm {
//           position: absolute;
//           bottom: 28px; left: 50%;
//           transform: translateX(-50%);
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(60px, 14vw, 160px);
//           letter-spacing: 0.04em;
//           white-space: nowrap;
//           color: transparent;
//           -webkit-text-stroke: 1px rgba(235,159,37,0.1);
//           pointer-events: none; user-select: none; z-index: 0;
//         }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 900px) {
//           .ft-hero { grid-template-columns: 1fr; gap: 0; }
//           .ft-right { border-left: none; border-top: 1px solid var(--line); padding-left: 0; padding-top: 50px; }
//           .ft-h1 { font-size: clamp(52px,11vw,80px); }
//         }
//         @media (max-width: 620px) {
//           .ft-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
//           .ft-nav { flex-wrap: wrap; }
//           .ft-nav li { border-top: 1px solid var(--line); }
//           .ft-stats { grid-template-columns: 1fr 1px 1fr; }
//         }
//       `}</style>

//       <footer ref={ref} className={`ft${vis ? " vis" : ""}`}>
//         <div className="ft-z">

//           {/* ── Animated amber stripe ── */}
//           <div className="ft-stripe" />

//           {/* ── Ticker tape ── */}
//           <div className="ft-ticker" aria-hidden="true">
//             <div className="ft-ticker-inner">
//               <div className="ft-ticker-text">{TICKER_TEXT}</div>
//               <div className="ft-ticker-text" aria-hidden="true">{TICKER_TEXT}</div>
//             </div>
//           </div>

//           {/* ── HERO ── */}
//           <div className="ft-hero">

//             {/* LEFT: headline + CTA */}
//             <div>
//               <div className="ft-anim-l d1">
//                 <div className="ft-eyebrow">
//                   <div className="ft-dot" />
//                   Bizimlə əlaqə
//                   <div className="ft-eyebrow-line" />
//                 </div>
//               </div>

//               <div className="ft-anim d2">
//                 <h2 className="ft-h1">
//                   <span className="ft-h1-solid">LAYİQLİ</span>
//                   <span className="ft-h1-outline">VEB SAYT</span>
//                   <span className="ft-h1-solid">İSTƏYİRSƏN?</span>
//                 </h2>
//               </div>

//               <div className="ft-anim d3">
//                 <p className="ft-sub">
//                   Güclü komanda. Kəskin dizayn. Sıfır kompromis.
//                   İdeyadan hazır məhsula — sürətlə və professional şəkildə.
//                 </p>
//               </div>

//               <div className="ft-cta-wrap ft-anim d4">
//                 <a href="/order" className="ft-cta">
//                   <span>SİFARİŞ ET</span>
//                   <IconArrow />
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT: stats + contact + socials */}
//             <div className="ft-right">
//               <div className="ft-anim d3">
//                 <div className="ft-stats">
//                   <div className="ft-stat">
//                     <span className="ft-stat-n">50+</span>
//                     <span className="ft-stat-l">Layihə</span>
//                   </div>
//                   <div className="ft-stat-div" />
//                   <div className="ft-stat">
//                     <span className="ft-stat-n">3 İL</span>
//                     <span className="ft-stat-l">Təcrübə</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="ft-contacts ft-anim d4">
//                 <div className="ft-card">
//                   <span className="ft-card-tag">Əlaqə nömrəsi</span>
//                   <a href="tel:+994703107666">(+994) 70-310-76-66</a>
//                 </div>
//                 <div className="ft-card">
//                   <span className="ft-card-tag">Email ünvanı</span>
//                   <a href="mailto:info@webcraft.az">info@webcraft.az</a>
//                 </div>
//               </div>

//               <div className="ft-anim d5">
//                 <div className="ft-socials">
//                   {SOCIALS.map((s, i) => (
//                     <a
//                       key={i}
//                       href={s.href}
//                       className="ft-soc"
//                       aria-label={s.label}
//                       title={s.label}
//                       target={s.label !== "Email" ? "_blank" : undefined}
//                       rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
//                     >
//                       {s.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Divider with travelling amber dash ── */}
//           <div className="ft-mid ft-anim d6">
//             <div className="ft-hr" />
//           </div>

//           {/* ── Bottom bar ── */}
//           <div className="ft-bottom">
//             <p className="ft-copy">
//               © {new Date().getFullYear()} <strong>WEB<em>CRAFT</em></strong> — Bütün hüquqlar qorunur
//             </p>
//             <nav aria-label="Footer navigation">
//               <ul className="ft-nav">
//                 {NAV.map(l => (
//                   <li key={l.href}>
//                     <a href={l.href}><span>{l.label}</span></a>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>

//         {/* ── Watermark ── */}
//         <div className="ft-wm" aria-hidden="true">WEBCRAFT</div>
//       </footer>
//     </>
//   );
// }