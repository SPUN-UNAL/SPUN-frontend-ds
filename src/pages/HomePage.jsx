import HeroSection from "components/LandingPage/HeroSection";
import FeaturesSection from "components/LandingPage/FeaturesSection";
import CTA from "components/LandingPage/CTA"
import { useEffect } from "react";
function HomePage() {
  // Changes background color
  useEffect(() => {
    document.body.classList.add("bg-slate-100");
  });

  return (
    <>
      <div className="">
        <HeroSection></HeroSection>
        <FeaturesSection></FeaturesSection>
        <CTA></CTA>
      </div>
    </>
  );
}

export default HomePage;
