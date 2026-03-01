import styles from "./Services.module.scss";
import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  ShoppingCart,
  Search,
  Shield,
  Zap,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const services = [
  {
    icon: <Globe />,
    title: "Korporativ veb sayt",
    desc: "Şirkətiniz üçün etibarlı, sürətli və satış yönümlü veb sayt.",
    features: [" 5-7 səhifə strukturu",
               " Mobil uyğun dizayn",
               " Admin panel",
               " SEO əsas struktur",
               " Sürətli yüklənmə",
               " Əlaqə formu",
               " 7 gün texniki dəstək"],
    price: "499 AZN-dən",
  },
  {
    icon: <Rocket />,
    title: "Landing page",
    desc: "Reklam üçün yüksək konversiya verən landing səhifələri.",
    features: [" Mobil uyğun dizayn",
               " Standart UI dizayn",
               " Əlaqə formu",
               " WhatsApp inteqrasiyası",
               " 3 gün texniki dəstək"],
    price: "250 AZN-dən",
  },
  {
    icon: <ShoppingCart />,
    title: "E-ticarət sistemi",
    desc: "Onlayn satış üçün tam funksional mağaza.",
    features: [" Məhsul əlavə etmə sistemi",
               " Ödəniş inteqrasiyası",
               " Admin panel",
               " Sifariş idarəetmə",
               " Mobil uyğun dizayn",
               " SEO əsas struktur",
               " Təhlükəsizlik tədbirləri"],
    price: "759 AZN-dən",
  },
  {
    icon: <Search />,
    title: "SEO xidmətləri",
    desc: "Google-da daha üst sıralar üçün optimallaşdırma.",
    features: [" Açar söz analizi",
               " Texniki SEO audit",
               " On-page optimizasiya",
               " Aylıq hesabat",
               " Rəqib analizi"],
    price: "199 AZN / ay",
  },
  {
    icon: <Shield />,
    title: "Texniki dəstək",
    desc: "Saytınızın təhlükəsizliyi və stabil işləməsi.",
    features: ["Backup", "Security", "24/7 nəzarət"],
    price: "99 AZN / ay",
  },
  {
    icon: <Zap />,
    title: "Sürət optimallaşdırma",
    desc: "Saytın yüklənmə sürətini maksimuma çıxarırıq.",
    features: ["Core Web Vitals", "Image optimize", "Clean code"],
    price: "249 AZN-dən",
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.header}>
        <span className={styles.badge}>Xidmətlərimiz</span>
        <h2>Biznesiniz üçün peşəkar həllər</h2>
        <p>
          Sadəcə dizayn etmirik — məqsədimiz sizə real müştəri və gəlir
          qazandırmaqdır.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={styles.icon}>{s.icon}</div>

            <h3>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>

            <ul>
              {s.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            <div className={styles.footer}>
              <span>{s.price}</span>
              <a href="/order" className={styles.button}>
                Müraciət et <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <div>
          <h3>Layihəniz var?</h3>
          <p>Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın.</p>
        </div>
        <div className={styles.ctaActions}>
          <a href="/order" className={styles.primary}>
            Qiymət təklifi al
          </a>
           <a
             href="https://wa.me/994703107666"
             target="_blank"
             rel="noopener noreferrer"
             className={styles.secondary}
           > Zəng et
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;