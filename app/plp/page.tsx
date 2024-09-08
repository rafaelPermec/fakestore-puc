"use client";
import { Suspense, useEffect, useState } from "react";
import WrapperWithTitle from "@/components/WrapperWithTitle/WrapperWithTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import VerticalCard from "@/components/Cards/VerticalCard/VerticalCard";

function PLPScreen() {
  const [type, setType] = useState<"products" | "services">("products");
  const searchParams = useSearchParams();
  const router = useRouter();
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
      <WrapperWithTitle
        title="Conheça nossos Produtos e Serviços"
        subtitle="Aqui você encontra tudo o que precisa!"
      >
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
                router.replace("/plp?type=products");
                setType("products");
              }}
            >
              Produtos
            </TabsTrigger>
            <TabsTrigger
              value="services"
              onClick={() => {
                router.replace("/plp?type=services");
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
              <VerticalCard
                key={index}
                title="Produtos"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea tenetur eum rerum inventore."
                price={100 + index * 10}
                image="/images/home/products.png"
              />
            ))}
          </TabsContent>
          <TabsContent
            value="services"
            className="w-full flex flex-row items-start justify-center gap-6 flex-wrap"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <VerticalCard
                key={index}
                title="Serviços"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea tenetur eum rerum inventore."
                price={100 + index * 10}
                image="/images/home/services.jpg"
              />
            ))}
          </TabsContent>
        </Tabs>
      </WrapperWithTitle>
    </div>
  );
}

export default function PLP() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PLPScreen />
    </Suspense>
  );
}
