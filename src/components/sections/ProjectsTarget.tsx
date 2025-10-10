const ProjectsTarget = () => {
  const targets = [
    {
      id: 1,
      title: "STUDENTS",
      description: "Empowering the next generation with hands-on beekeeping skills and sustainable agriculture knowledge"
    },
    {
      id: 2,
      title: "COMMUNITY", 
      description: "Building resilient communities through sustainable beekeeping practices and economic opportunities"
    },
    {
      id: 3,
      title: "SPONSORS",
      description: "Creating partnerships that drive innovation and scalable impact in agricultural development"
    }
  ];

  return (
    <div className="py-16 px-6 md:px-16 bg-[#2d4a2b]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Target
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <div 
              key={target.id} 
              className="text-center group hover:bg-white/10 p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 group-hover:shadow-lg"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                  {target.title}
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                {target.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsTarget;
