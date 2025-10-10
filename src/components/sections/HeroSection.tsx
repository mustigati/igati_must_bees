import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero/igati-bee-keeping-1m-initiative.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="">
        <img
          src={heroImage}
          className="w-full h-[90vh] object-cover"
          alt="igati-one-million-bee-initiative"
        />

        <div className="absolute inset-0  flex flex-col justify-center">
          <div className=" bg-black/50 bg-opacity-50 flex flex-col items-center justify-center z-40 w-full  py-6">
            <div>
              <h3 className="text-amber-400 text-2xl md:text-3xl lg:text-5xl font-bold capitalize">
                Ultimate resource
              </h3>
              <h4 className="text-white text-xl md:text-2xl">for beekeeping</h4>

              <p className="text-amber-400  text-xl md:text-2xl  capitalize">
                With Igati/MUST bee initiative
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center mt-10">
          <button className="bg-amber-400/80 uppercase hover:bg-amber-500/70 inset-0 bg-opacity-50 text-black font-bold py-4 px-6 text-xl md:text-2xl cursor-pointer ">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
