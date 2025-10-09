import WorkCard from "../home/workCard";
import beeSetup from "../../assets/images/works/bee-hives.jpg";
import beeMaintenace from "../../assets/images/works/bee-maintenace2.jpg";
import beeHarvest from "../../assets/images/works/honey-harvest.jpg";

const WorkSection = () => {
  const works = [
    {
      id: 1,
      image: beeSetup,
      description:
        "Beekeeping begins with setting up wooden hives in a calm and shaded area rich in flowering plants. Each hive provides a safe space for bees to build their colonies and produce honeycombs.",
    },
    {
      id: 2,
      image: beeMaintenace,
      description:
        "Beekeepers routinely inspect the hives to ensure colony health, check for diseases, and confirm the queen bee is active. This stage also involves providing water and food supplements during dry seasons.",
    },
    {
      id: 3,
      image: beeHarvest,
      description:
        "Once the honeycombs are filled and capped, the honey is carefully extracted, filtered, and processed to maintain purity. The result is high-quality natural honey ready for packaging and sale.",
    },
  ];

  return (
    <div className=" flex flex-col gap-8 py-12 px-6 md:px-16 bg-gray-200">
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-center text-[#212a18]">
        How We Work
      </h3>

      <div className="grid grid-rows-1 md:grid-rows-3 gap-5">
        {works.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
