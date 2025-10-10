import partnerLogo from "../../assets/images/projects/partners/IGATI LOGO-01 1.png";

const ProjectsPartners = () => {
  return (
    <div className="py-16 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 fade-in-up">
          Partners
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="group cursor-pointer">
            <img
              src={partnerLogo}
              alt="Partner Organization Logo"
              className="w-[32rem] h-[32rem] md:w-[40rem] md:h-[40rem] object-contain hover:scale-105 transition-transform duration-500 drop-shadow-lg hover:drop-shadow-2xl"
            />
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed fade-in-up">
            We collaborate with leading organizations to amplify our impact and create sustainable solutions for beekeeping communities worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPartners;
