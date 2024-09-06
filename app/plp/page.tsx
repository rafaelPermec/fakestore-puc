"use client";
import { useEffect, useState } from "react";
import WrapperWithTitle from "@/components/WrapperWithTitle/WrapperWithTitle";
import Counter from "@/components/Counter/Counter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function PLP() {
  const [type, setType] = useState<"products" | "services">("products");
  const searchParams = useSearchParams();
  const param = searchParams.get("type");

  useEffect(() => {
    if (param === "products") {
      setType("products");
    }
    if (param === "services") {
      setType("services");
    } else {
      setType("products");
    }
  }, [param]);

  return (
    <div className="items-center justify-items-center min-h-[40dvw] p-8 pb-20 gap-16 sm:p-20 bg-white">
      <WrapperWithTitle title="Conheça nossos Produtos e Serviços" subtitle="Aqui você encontra tudo o que precisa!">
        <Tabs
          defaultValue={param === "services" ? "services" : "products"}
          value={type}
          onChange={(value) => {
            setType(value as unknown as "products" | "services");
          }}
          className="w-full flex flex-col items-center justify-center gap-2"
        >
          <TabsList className="grid grid-cols-2 w-[200px] gap-2">
            <TabsTrigger
              value="products"
              onClick={() => {
                setType("products");
              }}
            >
              Produtos
            </TabsTrigger>
            <TabsTrigger
              value="services"
              onClick={() => {
                setType("services");
              }}
            >
              Serviços
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="products"
            className="w-full flex flex-row items-start justify-center gap-6 flex-wrap"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                className="w-[30%] min-w-[350px] hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <Image
                    className="w-full h-64 object-cover rounded-lg"
                    loading="lazy"
                    src="/images/placeholder.png"
                    alt="Imagem de um produto"
                    width={300}
                    height={300}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>Produtos</CardTitle>
                  <CardDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    tenetur eum rerum inventore.
                  </CardDescription>
                  <div className="space-y-1">
                    <p className="text-md font-semibold text-gray-700">
                      R$ 100,00
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
            ))}
          </TabsContent>
          <TabsContent
            value="services"
            className="w-full flex flex-row items-start justify-center gap-6 flex-wrap"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                className="w-[30%] min-w-[350px] hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <Image
                    className="w-full h-64 object-cover rounded-lg"
                    loading="lazy"
                    src="/images/placeholder.png"
                    alt="Imagem de um produto"
                    width={300}
                    height={300}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>Serviços</CardTitle>
                  <CardDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    tenetur eum rerum inventore.
                  </CardDescription>
                  <div className="space-y-1">
                    <p className="text-md font-semibold text-gray-700">
                      R$ 100,00
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
            ))}
          </TabsContent>
        </Tabs>
      </WrapperWithTitle>
    </div>
  );
}
