import { Card } from "../ui/card";

type CardProps = {
  item: {
    image: string;
    description: string;
  };
};

const WorkCard = ({ item: { image, description } }: CardProps) => {
  return (
    <Card className="flex flex-col justify-center border-none shadow-none hover:shadow-xl cursor-pointer rounded-2xl md:flex-row h-full items-center w-full gap-4 py-12 px-6 md:px-16 ">
      <div className=" rounded-2xl overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-[200px] md:h-[300px] object-cover"
        />
      </div>
      <p className="text-lg md:text-xl font-semibold text-gray-700">
        {description}
      </p>
    </Card>
  );
};

export default WorkCard;

//w-[200px] h-[300px] lg:w-[300px] lg:h-[400px]
