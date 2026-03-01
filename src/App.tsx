// // import { useState } from "react";
// import Home from "./page/Home/Home";
// import styles from "./App.module.scss";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import { Route } from "lucide-react";
// import About from "./page/About/About";
// function App() {

//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//        {/* <Route path="/about" element={<About />} /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Order from "./page/Order/Order";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;