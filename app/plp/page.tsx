"use client";
import WrapperWithTitle from "@/components/WrapperWithTitle/WrapperWithTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Counter from "@/components/Counter/Counter";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PLP() {
  const searchParams = useSearchParams().get("type");

  return (
    <div className="items-center justify-items-center min-h-[40dvw] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <WrapperWithTitle title="Conheça nossos produtos e serviços">
        <Tabs
          defaultValue={searchParams === "services" ? "services" : "products"}
          className="w-full flex flex-col items-center justify-center gap-2"
        >
          <TabsList className="grid grid-cols-2 w-[200px] gap-2">
            <TabsTrigger value="products">Produtos</TabsTrigger>
            <TabsTrigger value="services">Serviços</TabsTrigger>
          </TabsList>
          <TabsContent
            value="products"
            className="w-full flex flex-row items-start justify-center gap-6 flex-wrap"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="w-[30%] min-w-[350px]">
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
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're
                    done.
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
          <TabsContent value="services" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </WrapperWithTitle>
    </div>
  );
}
