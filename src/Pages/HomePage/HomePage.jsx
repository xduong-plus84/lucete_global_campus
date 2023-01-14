import React from "react";
import HelpButton from "../../Components/HelpButton/HelpButton";
import Footer from "../../Layout/Footer/Footer";
import HomePageApps from "./HomePageApps/HomePageApps";
import HomePageCarousel from "./HomePageCarousel/HomePageCarousel";
import HomePageContact from "./HomePageContact/HomePageContact";
import HomePageHero from "./HomePageHero/HomePageHero";
import HomePageTabs from "./HomePageTabs/HomePageTabs";

export default function HomePage() {
  return (
    <div id="homepage">
      {/* <HomePageHero /> */}
      <HomePageCarousel />

      <HomePageTabs />
      <HomePageApps />
      <HomePageContact />

      <Footer />
      <HelpButton />
    </div>
  );
}
