import styles from "./About.module.scss";
import { ArrowRight, CheckCircle } from "lucide-react";
// import { motion } from "framer-motion";
import { LogoCloud } from "../../components/ui/LogoCloud";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const logos = [
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/csharp.svg",
    alt: "C#",
  },
  { 
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" 
  },
  {
     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" 
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mysql.svg",
    alt: "SQL",
  },

];

const About = () => {

    const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({ x: "-50%" , transition: { duration: 30, ease: "linear" }});
        controls.set({ x: "0%" });
      }
    };
    loop();
  }, [controls]);

 
  return (
    <main className={styles.about}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>

        <div className={styles.container}>
          <motion.span 
            className={styles.badge}
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
          >
            WebCraft haqqında
          </motion.span>

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
          >
            Biz bizneslər üçün
            <span> güvən yaradan rəqəmsal sistemlər</span> qururuq.
          </motion.h1>

          <motion.p
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.9}}
          >
            Dizayn bizim üçün məqsəd deyil. Məqsəd — satış,
            güvən və uzunmüddətli nəticədir.
          </motion.p>

          <a href="/order" className={styles.primaryBtn}>
            Layihəni başlayaq <ArrowRight size={18}/>
          </a>
        </div>
      </section>



      {/* LOGO CLOUD SECTION */}
<section
  style={{
    position: "relative",
    overflow: "hidden",
    padding: "80px 0",
    background: "#f9fafb",
  }}
>
  {/* Fade edges */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: 200,
      height: "100%",
      background: "linear-gradient(to right, #f9fafb, transparent)",
      zIndex: 10,
      pointerEvents: "none",
    }}
  />
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: 200,
      height: "100%",
      background: "linear-gradient(to left, #f9fafb, transparent)",
      zIndex: 10,
      pointerEvents: "none",
    }}
  />

  {/* Slider wrapper */}
  <motion.div
    animate={controls}
    style={{
      display: "flex",
      gap: 80,
      alignItems: "center",
      minWidth: "200%", // ⚡ Bu çox vacibdir, children-in təkrarını tam göstərir
      zIndex: 5,
    }}
  >
    {[...logos, ...logos].map((logo, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.2, opacity: 1 }}
        initial={{ opacity: 0.7 }}
        style={{ flex: "0 0 auto" }}
      >
      <img
        src={logo.src}
        alt={logo.alt}
        style={{
          height: 56,
          width: "auto",
          objectFit: "contain",
          filter: "grayscale(100%)",
          transition: "all 0.4s ease",
          display: "block",
        }}
      />

      </motion.div>
    ))}
  </motion.div>
</section>


{/*       
      <section className={styles.heroSection}>
        <h1>WebCraft haqqında</h1>
        <p>Dizayn bizim üçün məqsəd deyil. Məqsəd — satış və güvən yaratmaqdır.</p>
      </section> */}


      {/* AUTHORITY SECTION */}
      <section className={styles.authority}>
        <div className={styles.container}>
          <div className={styles.left}>
<h2>
  Sadəcə sayt hazırlamırıq.
  <span> Rəqəmsal sistem qururuq.</span>
</h2>

<p>
  WebCraft olaraq biz dizaynı satış strategiyası ilə birləşdiririk.
  Hər layihə — strukturlaşdırılmış plan, psixoloji yönümlü UX
  və ölçülə bilən nəticə üzərində qurulur.
</p>

<ul>
  <li><CheckCircle size={18}/> Strukturlaşdırılmış layihə prosesi</li>
  <li><CheckCircle size={18}/> Satış yönümlü UX dizayn</li>
  <li><CheckCircle size={18}/> Performans və conversion optimizasiyası</li>
  <li><CheckCircle size={18}/> Uzunmüddətli texniki dəstək</li>
</ul>
          </div>

          <div className={styles.statsCard}>
            <div>
              <strong>40+</strong>
              <span>Layihə</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Ölkə</span>
            </div>
            <div>
              <strong>97%</strong>
              <span>Müştəri məmnuniyyəti</span>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className={styles.cta}>
<h2>
  Biznesiniz premium görünməyə hazırdır?
  <br />
  <span>İndi ilk addımı atın.</span>
</h2>

<p>
  Layihənizi birlikdə planlayaq.
  Pulsuz konsultasiya — risk yoxdur, öhdəlik yoxdur.
</p>
        <a href="/order" className={styles.ctaBtn}>
          İndi başlayın <ArrowRight size={18}/>
        </a>
      </section>

    </main>
  );
};

export default About;
