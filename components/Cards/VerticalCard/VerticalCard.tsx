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
import { useState } from "react";
import { useGlobalContext } from "@/context/global-context";
import { ProductsDTO } from "@/mock/products-mock";

const VerticalCard: React.FC<Omit<ProductsDTO, "quantity">> = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useGlobalContext();
  return (
    <Card className="w-[30%] min-w-[350px] hover:shadow-lg hover:scale-105 transition-all duration-300">
      <CardHeader className="w-full h-auto relative">
        <Image
          src={props.image}
          alt={props.name}
          width={300}
          height={300}
          loading="lazy"
          className="w-full h-64 object-contain rounded-lg"
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <div className="space-y-1">
          <p className="text-md font-semibold text-gray-700">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.price)}
          </p>
        </div>
        <Separator className="w-full" />
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <Counter quantity={quantity} setQuantity={setQuantity} />
          <Button onClick={() => addToCart({ ...props, quantity })}>
            Comprar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VerticalCard;
