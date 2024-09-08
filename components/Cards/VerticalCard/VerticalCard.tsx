import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Counter from "@/components/Counter/Counter";
import Image from "next/image";

interface VerticalCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
  title,
  description,
  image,
  price,
}) => {
  return (
    <Card className="w-[30%] min-w-[350px] hover:shadow-lg hover:scale-105 transition-all duration-300">
      <CardHeader>
        <Image
          className="w-full h-64 object-cover rounded-lg"
          loading="lazy"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="space-y-1">
          <p className="text-md font-semibold text-gray-700">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </p>
        </div>
        <Separator className="w-full" />
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <Counter />
          <Button>Comprar</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VerticalCard;
