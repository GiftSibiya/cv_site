/// DEPENDENDY IMPORTS ///

import React from "react";

///--///

/// FILE IMPORTS ///

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PackageSection from "../components/PackageSection";
import WrittingService from "../components/WrittingService";
import Footer from "../components/Footer";

///--///

function HomePage() {
  return (
    <section>
      <Header />
      <HeroSection />
      <PackageSection />
      <WrittingService />
      <Footer />
    </section>
  );
}

export default HomePage;
