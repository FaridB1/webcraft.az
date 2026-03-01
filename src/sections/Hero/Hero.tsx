"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mouse glow only desktop
  useEffect(() => {
    if (isMobile) return;

    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  return (
    <section id="hero"
      className={styles.hero}
      style={
        !isMobile
          ? {
              background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(245,195,44,0.15), transparent 35%)`,
            }
          : undefined
      }
    >
      <div className={styles.noise}></div>

      <div className={styles.container}>
        {/* LEFT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className={styles.badge}>Premium Digital Studio</span>

          <h1>
            Sadəcə sayt deyil.
            <br />
            <span>Rəqəmsal İmperiya.</span>
          </h1>

          <p>
            WebCraft biznesləri premium səviyyəyə qaldırır.
            Strategiya + Dizayn + Texnologiya = Dominant brend.
          </p>

          <div className={styles.actions}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={styles.primaryBtn}
              onClick={() => navigate("/order")}
            >
              Layihəyə Başla
            </motion.button>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={styles.secondaryBtn}
              onClick={() => {
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            >
              İşlərimizə Bax
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.premiumCard}>
            <div className={styles.cardTop}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>

            <div className={styles.cardBody}>
              <h3>Live Revenue Growth</h3>
              <p>+63% Conversion Boost</p>

              <div className={styles.progress}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.5 }}
                  className={styles.progressFill}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;