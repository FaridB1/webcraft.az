// import { motion } from "framer-motion";
// import styles from "./Process.module.scss";
// import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaLightbulb />,
//     title: "Analiz & Strategiya",
//     desc: "Biznesini, hədəf auditoriyanı və bazarı analiz edirik. Doğru yol xəritəsi qururuq.",
//   },
//   {
//     icon: <FaPencilRuler />,
//     title: "UI/UX Dizayn",
//     desc: "Premium, modern və conversion yönümlü dizayn hazırlayırıq.",
//   },
//   {
//     icon: <FaCode />,
//     title: "Development",
//     desc: "React, TypeScript və NestJS ilə yüksək performanslı sistem qururuq.",
//   },
//   {
//     icon: <FaRocket />,
//     title: "Launch & Growth",
//     desc: "Saytı deploy edirik, SEO və performans optimizasiyası edirik.",
//   },
// ];

// const Process = () => {
//   return (
//     <section id="process" className={styles.process}>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <span className={styles.badge}>Prosesimiz</span>
//           <h2>Biz necə işləyirik?</h2>
//           <p>
//             Webcraft olaraq hər layihəni strukturlaşdırılmış, şəffaf və
//             nəticəyönümlü proseslə icra edirik.
//           </p>
//         </div>

//         <div className={styles.grid}>
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               className={styles.card}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className={styles.icon}>{step.icon}</div>
//               <h3>{step.title}</h3>
//               <p>{step.desc}</p>
//               <span className={styles.step}>0{i + 1}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;





import { motion } from "framer-motion";
import styles from "./Process.module.scss";
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb />,
    title: "Dərin Analiz & Strategiya",
    desc: "Biz biznesini, auditoriyanı və bazarı analiz edərək tam şəffaf, nəticəyə fokuslu yol xəritəsi hazırlayırıq.",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Premium Dizayn",
    desc: "Modern, ultra-clean və conversion-focused interfeys hazırlayırıq ki, istifadəçi təcrübəsi unikal olsun.",
  },
  {
    icon: <FaCode />,
    title: "High-Performance Development",
    desc: "React, TypeScript və NestJS ilə sürətli, etibarlı və gələcəyə hazır sistemlər qururuq.",
  },
  {
    icon: <FaRocket />,
    title: "Launch & Optimizasiya",
    desc: "Saytı deploy edirik, SEO, performans və UX optimizasiyasını tam təmin edirik.",
  },
];

const Process = () => {
  return (
    <section id="process" className={styles.process}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Prosesimiz</span>
          <h2>Biz necə işləyirik?</h2>
          <p>
            Webcraft olaraq hər layihəni strukturlaşdırılmış, şəffaf və
            nəticəyönümlü proseslə icra edirik.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={styles.icon}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {step.icon}
              </motion.div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className={styles.step}>0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;






// import { motion } from "framer-motion";
// import styles from "./Process.module.scss";
// import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaLightbulb />,
//     title: "Analiz & Strategiya",
//     desc: "Biznesinizi və bazarı dərindən analiz edirik. Doğru yol xəritəsi qururuq.",
//   },
//   {
//     icon: <FaPencilRuler />,
//     title: "UI/UX Dizayn",
//     desc: "Premium, conversion yönümlü dizaynlar hazırlayırıq.",
//   },
//   {
//     icon: <FaCode />,
//     title: "Development",
//     desc: "Yüksək performanslı və skalabil sistemlər qururuq.",
//   },
//   {
//     icon: <FaRocket />,
//     title: "Launch & Growth",
//     desc: "Deploy, SEO və davamlı inkişaf mərhələsi.",
//   },
// ];

// const Process = () => {
//   return (
//     <section className={styles.process}>
//       <div className={styles.header}>
//         <span className={styles.badge}>Prosesimiz</span>
//         <h2>Strukturlaşdırılmış İcra Sistemi</h2>
//       </div>

//       <div className={styles.timeline}>
//         {steps.map((step, i) => (
//           <motion.div
//             key={i}
//             className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: i * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className={styles.content}>
//               <div className={styles.icon}>{step.icon}</div>
//               <h3>{step.title}</h3>
//               <p>{step.desc}</p>
//               <span className={styles.number}>0{i + 1}</span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Process;