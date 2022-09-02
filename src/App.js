import React from "react";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import TipsSection from "./components/Tips";
import "./styles/MainStyleSheet.css";





function App() {
  return (
    <>
      <div className="app_container">
      <Nav />
      <section id="home">
      <Header />
      </section>
      <About />
      <TipsSection />
      <Testimonials />
      <ContactUs />
      <Footer />
      </div>
    </>
  );
}

export default App;
