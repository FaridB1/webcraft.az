import { motion } from "framer-motion";
import styles from "./Order.module.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Order = () => {
  const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      "service_s6epwwd",
      "template_tvx57m7",
      form.current,
      "grD-eI0M_Fg0-MLDc"
    )
    .then(
      () => {
        alert("Sorğunuz uğurla göndərildi ✅");
        form.current?.reset();
      },
      (error) => {
        alert("Xəta baş verdi ❌");
        console.log(error.text);
      }
    );
};
  return (
    <section className={styles.order}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.breadcrumb}>
            Ana səhifə <span>/</span> Əlaqə
          </span>

          <h1>Layihənizi bizimlə həyata keçirin</h1>

          <p>
            Biznesiniz üçün performanslı, premium və uzunmüddətli nəticə verən
            veb həllər hazırlayırıq.
          </p>
        </div>

        <div className={styles.grid}>
          {/* LEFT INFO */}
          <div className={styles.left}>
            <div className={styles.contactCard}>
              <h3>Əlaqə məlumatları</h3>

              <div className={styles.infoItem}>
                <span>Ünvan</span>
                <p>Qara Qarayev mts , Azər Manafov 1</p>
              </div>

              <div className={styles.infoItem}>
                <span>Telefon</span>
                <p>(+994) 70 310 76 66</p>
              </div>

              <div className={styles.infoItem}>
                <span>Email</span>
                <p>webcraftazz@gmail.com</p>
              </div>

              <div className={styles.socials}>
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <FaTiktok />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Bizimlə əlaqə saxlayın</h2>

            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.row}>
                <input name="name" type="text" placeholder="Adınız" required />
                <input name="email" type="email" placeholder="Email ünvanınız" required />
              </div>

              <div className={styles.row}>
                <input name="phone" type="tel" placeholder="Telefon nömrəsi" />
                <input name="company" type="text" placeholder="Şirkət adı" />
              </div>
{/* 
              <textarea
                rows={4}
                placeholder="Layihə haqqında qısa məlumat..."
              /> */}
              <textarea name="message" rows={4} placeholder="Layihə haqqında qısa məlumat..." />

              <button type="submit" className={styles.submitBtn}>
                Sorğu göndər <FiArrowUpRight />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Order;
