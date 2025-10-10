import projectsBg from "../../assets/images/projects/projectbg.png";

const ProjectsHeroSection = () => {
  return (
    <div className="min-h-[80vh] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={projectsBg}
          className="w-full h-full object-cover"
          alt="Beekeeping Projects Background"
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Our Projects
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          <div className="bg-amber-500/90 px-6 py-3 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-black">Research</h3>
          </div>
          <div className="bg-amber-500/90 px-6 py-3 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-black">Innovate</h3>
          </div>
          <div className="bg-amber-500/90 px-6 py-3 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-black">Commercialize</h3>
          </div>
          <div className="bg-amber-500/90 px-6 py-3 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-black">Extension</h3>
          </div>
        </div>

        <div className="max-w-4xl space-y-4 text-white text-lg md:text-xl">
          <p className="italic">
            "From local communities to the global stage, bees open doors to opportunity."
          </p>
          <p>
            Through beekeeping, we empower families with sustainable livelihoods.
          </p>
          <p>
            Students gain hands-on skills, innovation, and knowledge for the future.
          </p>
          <p className="font-semibold">
            Together, bees and their products inspire change, growth, and a healthier world.
          </p>
        </div>

        <div className="mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black font-bold py-4 px-8 rounded-lg text-xl flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95">
            <span className="animate-bounce">🐝</span>
            Partner with Us. Bee the Change!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeroSection;
