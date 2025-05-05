import HeroSection from "../sections/HeroSection";
import ShowCars from "../sections/ShowCars";
import VarietyBox from "../sections/VarietyBox";
import NewsLetter from "../sections/NewsLetter";
import LatestVehicles from "../sections/LatestVehicles";
import Testimonials from "../sections/Testimonials";
import Blogs from "../sections/Blogs";

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <VarietyBox />
      <ShowCars />
      <NewsLetter
        heading="  Sign Up and never miss a deal again"
        buttonText="Subscribe"
        bg="/assets/newsletter-1.jpg"
        activeInput={true}
      />
      <LatestVehicles />
      <Testimonials />
      <Blogs />
      <NewsLetter
        heading="  Sign Up and never miss a deal again"
        buttonText="Subscribe"
        bg="/car-asset/last car.png"
        activeInput={false}
      />
    </div>
  );
};

export default HomePage;
