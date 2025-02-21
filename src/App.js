import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import SubmitForm from "./components/SubmitForm";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import ChooseUs from "./components/ChooseUs";
import VideoIntroduction from "./components/VideoIntroduction";
import HappyClients from "./components/HappyClients";
import BlogGrid from "./components/BlogGrid";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Promotions from "./components/Promotions";

const App = () => {
  return (
    <div>
      <TopBar/>
      <Header />
      <HeroSection />
      <Features />
      <Services/>
      <AboutSection/>
      <ChooseUs/>
      <VideoIntroduction/>
      <HappyClients/>
      <BlogGrid/>
      <Testimonials/>
      <Faq/>
      <Promotions/>
      <SubmitForm/>
      <Footer />
    </div>
  );
};

export default App;
