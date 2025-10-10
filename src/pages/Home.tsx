import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="pt-16 md:pt-20">
        <AboutSection />
        <WorkSection />
      </div>
    </div>
  );
};

export default Home;
