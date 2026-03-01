"use client";
import { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "./Navbar.module.scss";
import {
  Home,
  Briefcase,
  FolderKanban,
  DollarSign,
  Workflow,
  Info,
  Menu,
  X,
  PhoneCall,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";



const navItems = [
  { label: "Ana səhifə", href: "#hero", icon: Home },
  { label: "Xidmətlər", href: "#services", icon: Briefcase },
  { label: "İşlərimiz", href: "#projects", icon: FolderKanban },
  { label: "Proses", href: "#process", icon: Workflow },
  { label: "Qiymətlər", href: "#pricing", icon: DollarSign },
  
  
  {
  label: "Haqqımızda",
  href: "/about",
  icon: Info,
},
  
];

const Navbar = () => {
const location = useLocation();
const navigate = useNavigate();

const [active, setActive] = useState<string>(location.pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // const [active, setActive] = useState<string>("/");
useEffect(() => {
  if (location.pathname !== "/") {
    setActive(location.pathname);
  }
}, [location.pathname]);
  const pillRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});  
 



const scrollToSection = (id: string) => {
  const scrollFunc = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (location.pathname !== "/") {
    // Başqa səhifədəsə → əvvəl ana səhifəyə navigate et
    navigate("/");
    setTimeout(scrollFunc, 200); // 200ms gözlə səhifə render olunsun
  } else {
    scrollFunc();
  }
};





useEffect(() => {
  const sections = navItems
    .filter(i => i.href.startsWith("#"))
    .map(i => i.href.replace("#", ""));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive("#" + entry.target.id);
        }
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
    }
  );

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

useEffect(() => {
  const timeout = setTimeout(() => {
    const el = itemRefs.current[active];
    const pill = pillRef.current;

    if (el && pill) {
      pill.style.width = `${el.offsetWidth}px`;
      pill.style.left = `${el.offsetLeft}px`;
    }
  }, 50);

  return () => clearTimeout(timeout);
}, [active, location.pathname]);

useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [open]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Logo */}
          <div className={styles.logo}>
            <img src="src\assets\Əyri_üyrü_logo-removebg-preview.png" alt="Web Craft Logo" />
            
          </div>

                    {/* Desktop Menu */}
          <div className={styles.menu}>
            <div ref={pillRef} className={styles.activePill} />
          
{navItems.map((item) => (
  <div key={item.label} className={styles.menuItem}>
    <a
      href="#"
onClick={(e) => {
  e.preventDefault();

  if (item.href.startsWith("#")) {
    setActive(item.href);
    scrollToSection(item.href.replace("#", ""));
  } else {
    navigate(item.href);
    setActive(item.href);
  }

  setOpen(false);
}}
      className={active === item.href ? styles.active : ""}
      ref={(el) => {
        if (el) itemRefs.current[item.href] = el;
      }}
    >
      <item.icon size={16} />
      {item.label}
    </a>
  </div>
))}

          </div>

          {/* CTA */}
         <button
           onClick={() => scrollToSection("contact-cta")}
           className={styles.profileBtn}
         >
           <PhoneCall size={16} />
            Pulsuz konsultasiya
          </button>

          {/* Mobile */}
          <button className={styles.burger} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
   {/* Overlay */}
<div
  className={`${styles.overlay} ${open ? styles.showOverlay : ""}`}
  onClick={() => setOpen(false)}
/>

{/* Mobile Drawer */}
<div
  className={`${styles.mobileDrawer} ${open ? styles.openDrawer : ""}`}
>
  <div className={styles.mobileHeader}>
    <span>Menyu</span>
    <button onClick={() => setOpen(false)}>
      <X size={22} />
    </button>
  </div>

  <div className={styles.mobileLinks}>
    {navItems.map((item) => (
      <button
        key={item.href}
        className={active === item.href ? styles.mobileActive : ""}
        onClick={() => {
          if (item.href.startsWith("#")) {
            setActive(item.href);
            scrollToSection(item.href.replace("#", ""));
          } else {
            navigate(item.href);
            setActive(item.href);
          }
          setOpen(false);
        }}
      >
        <item.icon size={18} />
        {item.label}
      </button>
    ))}
  </div>

  <button
    className={styles.mobileCTA}
    onClick={() => {
      scrollToSection("contact-cta");
      setOpen(false);
    }}
  >
    <PhoneCall size={18} />
    Pulsuz konsultasiya
  </button>
</div>
        
      </div>
    </header>
  );
};

export default Navbar;

   