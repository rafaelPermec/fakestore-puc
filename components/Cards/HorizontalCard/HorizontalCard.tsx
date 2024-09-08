import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
interface HorizontalCardProps {
  title: string;
  value: number;
  quantity: number;
  image: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  value,
  quantity,
  image,
}) => {
  return (
    <div className="w-full h-auto bg-white rounded-lg shadow-md flex flex-row flex-nowrap align-center justify-start hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer px-4 py-2 gap-4 overflow-hidden">
      <div className="w-[120px] h-auto relative rounded-t-lg overflow-hidden rounded-l-lg flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          objectFit="cover"
          className="w-full h-auto cover"
        />
      </div>
      <div className="w-full p-4">
        <h3 className="text-lg text-gray-600 font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)}
        </p>
        <p className="text-sm text-gray-500">Quantidade: {quantity}</p>
      </div>
      <div className="w-auto h-auto flex items-start justify-center p-2">
        <IoMdClose className="w-[18px] h-[18px] text-gray-400 hover:text-gray-600 transition-all duration-300" />
      </div>
    </div>
  );
};

export default HorizontalCard;
