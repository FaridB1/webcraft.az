import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Gülüş Diş Klinikası",
    description: "Online rezervasiya sistemi və premium korporativ sayt",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=70&auto=format",
  },
  {
    id: 2,
    title: "Bella Beauty Studio",
    description: "Landing page + booking sistemi",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=70&auto=format",
  },
  {
    id: 3,
    title: "PetPal E-commerce",
    description: "Tam funksional e-ticarət platforması",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=70&auto=format",
  },
  {
    id: 4,
    title: "MindWell Psixologiya",
    description: "Yüksək dönüşümlü eniş səhifəsi",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=70&auto=format",
  },
  {
    id: 5,
    title: "LearnHub Platform",
    description: "Onlayn təhsil veb tətbiqi",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=70&auto=format",
  },
];

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

export default function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => wrapIndex(prev + 1, projects.length));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () =>
    setActive((prev) => wrapIndex(prev + 1, projects.length));
  const prev = () =>
    setActive((prev) => wrapIndex(prev - 1, projects.length));

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth <= 768);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);
   
  const [paused, setPaused] = useState(false);

useEffect(() => {
  if (paused) return;

  const interval = setInterval(() => {
    setActive((prev) => wrapIndex(prev + 1, projects.length));
  }, 4000);

  return () => clearInterval(interval);
}, [paused]);

  return (
    <section id="projects" className={styles.wrapper}>
          <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className={styles.badge}>Layihələrimiz</span>
      <h2>Webcraft müştəriləri üçün hazırladığımız işlər</h2>
      <p>
        Hər layihə biznes məqsədinə uyğun strategiya və yüksək performansla
        hazırlanıb.
      </p>
    </motion.div>
<div className={styles.stage}
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}>
  {isMobile ? (
    <motion.div
      className={styles.mobileSlider}
      animate={{ x: `-${active * 100}%` }}
      transition={{ type: "spring", stiffness: 120 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x < -80) next();
        if (info.offset.x > 80) prev();
      }}
    >
      {projects.map((project) => (
        <div key={project.id} className={styles.mobileCard}>
          <img src={project.image} alt={project.title}   
          loading="lazy"
          decoding="async"/>
          <div className={styles.mobileOverlay} />
          <div className={styles.mobileContent}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  ) : (
    projects.map((project, index) => {
      let offset = index - active;

      if (offset > projects.length / 2)
        offset -= projects.length;
      if (offset < -projects.length / 2)
        offset += projects.length;

      const abs = Math.abs(offset);

      return (
        <motion.div
          key={project.id}
          className={styles.card}
          animate={{
            x: offset * 280,
            rotateZ: offset * 45,
            scale: offset === 0 ? 1.08 : 0.9,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          style={{ zIndex: 100 - abs }}
          onClick={() => setActive(index)}
        >
          <img src={project.image} alt={project.title} />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </motion.div>
      );
    })
  )}
</div>

      <div className={styles.dots}>
        {projects.map((_, i) => (
          <button
            key={i}
            className={i === active ? styles.active : ""}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}