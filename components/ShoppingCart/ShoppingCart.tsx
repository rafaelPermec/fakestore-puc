"use client";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import HorizontalCard from "@/components/Cards/HorizontalCard/HorizontalCard";
import { useGlobalContext } from "@/context/global-context";

const ShoppingCart: React.FC = () => {
  const router = useRouter();
  const { cart, totalPrice } = useGlobalContext();

  return (
    <Sheet>
      <SheetTrigger>
        <p className="text-lg text-gray-300 hover:text-white hover:scale-110 transform transition-transform cursor-pointer">
          <FaShoppingCart className="max-[700px]:w-[40px] w-[40px]" />
        </p>
      </SheetTrigger>
      <SheetContent className="bg-gray-100 h-[100dvh]">
        <SheetHeader className="flex flex-col items-center justify-center mt-4 mb-6">
          <SheetTitle className="text-gray-800">Carrinho</SheetTitle>
          <SheetDescription className="w-[80%] text-gray-800 text-sm text-center">
            Veja todos os itens que você adicionou ao carrinho!
          </SheetDescription>
        </SheetHeader>
        <Separator className="w-full mb-6 bg-gray-400" />
        <div className="h-full space-y-2 overflow-y-scroll px-4 py-6 z-10 pb-72">
          {cart.map((item) => (
            <HorizontalCard key={item.id} {...item} />
          ))}
        </div>
        <div className="sticky bottom-0 left-0 w-full px-4 py-8 z-100 bg-gray-100">
          <Separator className="w-full bg-gray-400" />
          <SheetFooter className="mt-4">
            <div className="w-full flex flex-col items-center justify-start gap-4">
              <p className="text-gray-800 text-sm">
                Total:{" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </p>
              <Button
                className="w-full text-lg font-semibold mx-4 py-6 px-4 rounded-lg bg-green-800 hover:bg-green-700"
                onClick={() => router.push("/checkout")}
              >
                Finalizar Compra
              </Button>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
