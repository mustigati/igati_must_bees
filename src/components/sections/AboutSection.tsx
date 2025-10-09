import { Handshake, Star } from "lucide-react";

const AboutSection = () => {
  const about = [
    {
      id: 1,
      icon: Star,
      description:
        "We co-generate purposeful knowledge that addresses community needs and challenges.",
    },
    {
      id: 2,
      icon: Star,
      description:
        "We co-create bold solutions turning ideas into sustainable, practical enterprises.",
    },
    {
      id: 3,
      icon: Star,
      description:
        "We transform innovations into cooperative brands and thriving social enterprises that generate jobs and income.",
    },
    {
      id: 4,
      icon: Star,
      description:
        "We empower communities with dignity, hope, and lasting positive transformation.",
    },
  ];
  return (
    <div className=" relative min-h-[80vh]  flex flex-col ">
      <div className="flex gap-4 bg-[#0b1105] flex-1 justify-center py-12 px-6 md:px-16 items-center">
        <div className="bg-white rounded-full flex items-center gap-2 text-black px-10 py-2">
          <Handshake />
          <p className="font-semibold text-xl md:text-4xl">
            Partner with Us. Bee the change!
          </p>
        </div>
      </div>
      <div className="flex-1 h-full bg-[#212a18] grid grid-cols-1 text-white md:grid-cols-4 items-center gap-4  py-12 px-6 md:px-16 ">
        {about.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <item.icon className="fill-amber-400 text-amber-400" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
