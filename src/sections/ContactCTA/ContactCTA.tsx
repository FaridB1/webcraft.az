import { motion } from "framer-motion";
import styles from "./ContactCTA.module.scss";
import { FaArrowRight } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section id="contact-cta" className={styles.cta}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.left}>
          <h2>Layihənizi başlayaq?</h2>
          <p>
            Biznesiniz üçün real dəyər yaradan veb platforma qurmaq istəyirsiniz?
            Webcraft komandası sizə pulsuz konsultasiya təqdim edir.
          </p>

          <ul>
            <li>✔ Pulsuz ilkin analiz</li>
            <li>✔ Şəffaf qiymət</li>
            <li>✔ Müasir texnologiyalar</li>
            <li>✔ Real nəticələr</li>
          </ul>
        </div>

        <div className={styles.right}>
          <a
            href="https://wa.me/994703107666"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            İndi əlaqə saxla <FaArrowRight />
          </a>

          <span className={styles.note}>
            Cavab müddəti: maksimum 24 saat
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;