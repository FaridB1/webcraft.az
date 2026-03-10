// import styles from "./Footer.module.scss";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTiktok,
//   FaWhatsapp,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         {/* Left */}
//         <div className={styles.left}>
//           <h2>Qiymət təklifi al</h2>
//           <a href="/order" className={styles.cta}>
//             Sifariş et ↗
//           </a>
//         </div>

//         {/* Right */}
//         <div className={styles.right}>
//           <div className={styles.info}>
//             <span>Əlaqə nömrəsi</span>
//             <a href="tel:+994703107666">(+994) 70-310-76-66</a>
//           </div>

//           <div className={styles.info}>
//             <span>Email</span>
//             <a href="mailto:info@webcraft.az">info@webcraft.az</a>
//           </div>

//           <div className={styles.socials}>
//             <a
//               href="https://facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF />
//             </a>

//             <a
//               href="https://instagram.com/webcraft.az"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram />
//             </a>

//             <a
//               href="https://wa.me/994703107666"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaWhatsapp />
//             </a>

//             <a
//               href="https://tiktok.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTiktok />
//             </a>

//             <a href="mailto:info@webcraft.az">
//               <FaEnvelope />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className={styles.bottom}>
//         <span>© {new Date().getFullYear()} Webcraft. All rights reserved.</span>
//         <div className={styles.links}>
//           <a href="/">Ana səhifə</a>
//           <a href="/about">Haqqımızda</a>
//           <a href="/#services">Xidmətlər</a>
//           <a href="/#projects">Portfolio</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import styles from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Left */}
        <div className={styles.left}>
          <h2>Qiymət təklifi al</h2>

          <button
            onClick={() => navigate("/order")}
            className={styles.cta}
          >
            Sifariş et ↗
          </button>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.info}>
            <span>Əlaqə nömrəsi</span>
            <a href="tel:+994703107666">(+994) 70-310-76-66</a>
          </div>

          <div className={styles.info}>
            <span>Email</span>
            <a href="mailto:webcraftazz@gmail.com">webcraftazz@gmail.com</a>
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

            <a href="mailto:webcraftazz@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Webcraft. All rights reserved.</span>

        <div className={styles.links}>
          <button onClick={() => navigate("/")}>Ana səhifə</button>
          <button onClick={() => navigate("/about")}>Haqqımızda</button>
          <button onClick={() => navigate("/#services")}>Xidmətlər</button>
          <button onClick={() => navigate("/#projects")}>Portfolio</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;