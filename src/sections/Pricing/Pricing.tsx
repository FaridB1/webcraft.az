import { motion } from "framer-motion";
import styles from "./Pricing.module.scss";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Başlanğıc",
    price: "250 AZN",
    desc: "Şəxsi səhifə və kiçik bizneslər üçün.",
    features: [
      "1 səhifəlik landing page",
      "Mobil uyğun dizayn",
      "Əsas SEO",
      "WhatsApp əlaqə",
      "3 gün çatdırılma",
    ],
  },
  {
    title: "Peşəkar",
    price: "500 AZN",
    desc: "Startup və böyüyən bizneslər üçün.",
    popular: true,
    features: [
      "5 səhifəyə qədər",
      "Premium UI/UX",
      "SEO optimizasiya",
      "Admin panel",
      "Blog sistemi",
      "7 gün çatdırılma",
    ],
  },
  {
    title: "Biznes",
    price: "900 AZN",
    desc: "Şirkətlər və platformalar üçün.",
    features: [
      "Limitsiz səhifə",
      "Dashboard",
      "API inteqrasiya",
      "Email & CRM",
      "Hosting dəstəyi",
      "14 gün çatdırılma",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Şəffaf qiymətlər</span>
          <h2>Hər büdcəyə uyğun paketlər</h2>
          <p>
            Başlanğıc paketimiz cəmi <b>250 AZN</b>. Gizli ödəniş yoxdur.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${
                plan.popular ? styles.popular : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className={styles.ribbon}>Ən çox seçilən</div>
              )}

              <h3>{plan.title}</h3>
              <p className={styles.desc}>{plan.desc}</p>

              <div className={styles.price}>{plan.price}</div>

              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>
                    <FaCheck /> {f}
                  </li>
                ))}
              </ul>

             <button
               className={styles.cta}
               onClick={() =>
                 window.open(
                   "https://wa.me/994703107666?text=Salam%20WebCraft,%20pulsuz%20konsultasiya%20almaq%20istəyirəm.",
                   "_blank"
                 )
               }
             >
               Pulsuz konsultasiya al
             </button>
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;