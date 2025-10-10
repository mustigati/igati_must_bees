import hivesetup from "../../assets/images/projects/showcase/hivesetup.png";
import hivesetup1 from "../../assets/images/projects/showcase/hivesetup1.png";
import hivesetup2 from "../../assets/images/projects/showcase/hivesetup2.png";
import hivesetup3 from "../../assets/images/projects/showcase/hivesetup3.png";
import hivesetup4 from "../../assets/images/projects/showcase/hivesetup4.png";

const ProjectsShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      image: hivesetup1,
      title: "Hive Setup & Management",
      description: "Through careful hive management, we ensure optimal bee health and community growth"
    },
    {
      id: 2,
      image: hivesetup2, 
      title: "Sustainable Beekeeping",
      description: "Through careful hive management, we ensure optimal bee health and community growth"
    },
    {
      id: 3,
      image: hivesetup3,
      title: "Honey Extraction Process", 
      description: "Through careful honey processing we deliver pure and community health"
    },
    {
      id: 4,
      image: hivesetup4,
      title: "Quality Honey Production",
      description: "Through careful honey processing we deliver pure and community health"
    },
    {
      id: 5,
      image: hivesetup,
      title: "Product Development",
      description: "Through careful honey processing we deliver pure and community health"
    },
    {
      id: 6,
      image: hivesetup1,
      title: "Final Products",
      description: "Through careful honey processing we deliver pure and community health"
    }
  ];

  return (
    <div className="py-16 px-6 md:px-16 bg-gray-50">
      <div className="mb-16">
        <div className="bg-[#2d4a2b] py-12 px-6 md:px-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Through the Igati One Million Bee initiative, we unlock the power of bees to drive food security, agricultural growth, and 
              economic prosperity. Our program aims to revolutionize beekeeping in Kenya and beyond. We provide bees, the richest 
              opportunity for sustainable income. In partnership with various organization, we receive requests to manage farm activities, 
              improve nutrition of crops honey product warehouses—all with cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {showcaseItems.map((item, index) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
