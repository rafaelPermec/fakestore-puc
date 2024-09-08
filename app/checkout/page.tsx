"use client";
import WrapperWithTitle from "@/components/WrapperWithTitle/WrapperWithTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CreditCardInputs } from "@/mock/inputs-mock";
import { Switch } from "@/components/ui/switch";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import { Separator } from "@/components/ui/separator";
import HorizontalCard from "@/components/Cards/HorizontalCard/HorizontalCard";
import Image from "next/image";
import { useGlobalContext } from "@/context/global-context";

export default function Checkout() {
  const { cart, totalPrice } = useGlobalContext();

  return (
    <div className="items-center justify-items-center min-h-[40dvw] p-8 pb-20 gap-16 sm:p-20 bg-white">
      <WrapperWithTitle
        title="Finalize sua Compra"
        subtitle="Preencha as informações abaixo para finalizar sua compra!"
      >
        <div className="w-full h-full flex flex-row items-stretch justify-center mt-8 max-[700px]:flex-col-reverse max-[700px]:items-center gap-8">
          <div className="w-full min-w-[350px] h-full">
            <Tabs
              defaultValue="credit-card"
              className="w-full flex flex-col items-center justify-center gap-2"
            >
              <TabsList className="grid grid-cols-2 w-[300px] gap-2">
                <TabsTrigger value="credit-card">Cartão de Crédito</TabsTrigger>
                <TabsTrigger value="pix">Pix</TabsTrigger>
              </TabsList>
              <TabsContent
                value="credit-card"
                className="w-full flex flex-row items-start justify-center gap-6 flex-wrap"
              >
                <Card className="w-[80%] min-w-[350px]">
                  <CardHeader>
                    <CardTitle>Pagamento no Cartão de Crédito</CardTitle>
                    <CardDescription>
                      Para pagamentos no cartão de crédito, preencha os campos
                      abaixo com os dados do seu cartão. Todas as informações
                      são criptografadas e seguras.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {CreditCardInputs.map((input) => (
                      <div className="space-y-1">
                        <Label htmlFor={input.id}>{input.label}</Label>
                        <Input
                          id={input.id}
                          type={input.type}
                          placeholder={input.placeholder}
                        />
                      </div>
                    ))}
                    <div className="space-y-1">
                      <Label htmlFor="password">Parcelas</Label>
                      <Select>
                        <SelectTrigger className="w-full text-gray-500">
                          <SelectValue
                            placeholder="Quantidade de Parcelas"
                            className="w-full"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Quantidade de Parcelas</SelectLabel>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                              <SelectItem key={item} value={item.toString()}>
                                {item}x de{" "}
                                {Intl.NumberFormat("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                }).format(totalPrice / item)}{" "}
                                sem juros
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <Separator className="w-full mb-6" />
                  <CardFooter className="w-full flex justify-center">
                    <Button className="w-full text-lg font-semibold mx-4 py-6 px-4 rounded-lg bg-green-800 hover:bg-green-700">
                      Finalizar Compra
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent
                value="pix"
                className="w-full flex flex-row items-start justify-center gap-6 flex-wrap"
              >
                <Card className="w-[80%] min-w-[350px]">
                  <CardHeader>
                    <CardTitle>Pagamento no Pix</CardTitle>
                    <CardDescription>
                      Para pagamentos no Pix, escaneie o QR Code abaixo e efetue
                      o pagamento. Você terá 24 horas para confirmar sua compra.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="w-full h-auto rounded-lg flex items-center justify-center">
                      <Image
                        src="/images/qrcode/qrcode.png"
                        alt="QR Code"
                        width={300}
                        height={300}
                        className="rounded-lg cover"
                      />
                    </div>
                  </CardContent>
                  <Separator className="w-full mb-6" />
                  <CardFooter className="w-full flex justify-center">
                    <Button className="w-full text-lg font-semibold mx-4 py-6 px-4 rounded-lg bg-green-800 hover:bg-green-700">
                      Finalizar Compra
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="w-[50%] min-w-[350px] flex flex-col items-center justify-center gap-8 max-[700px]:flex-col-reverse max-[700px]:items-center">
            <div className="w-full min-w-[350px] h-full">
              <Card className="w-full min-w-[350px]">
                <CardHeader>
                  <CardTitle>Carrinho de Compras</CardTitle>
                  <CardDescription>
                    Aqui estão os produtos e serviços que você adicionou ao seu
                    carrinho.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 overflow-y-scroll max-h-[300px] px-4">
                  {cart.map((item) => (
                    <HorizontalCard key={item.id} {...item} />
                  ))}
                </CardContent>
                <Separator className="w-full mt-4" />
                <CardFooter className="w-full flex justify-between items-center mt-4">
                  <p className="text-md font-semibold text-gray-700">Total:</p>
                  <p className="text-md font-semibold text-gray-700">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalPrice)}
                  </p>
                </CardFooter>
              </Card>
            </div>
            {Array.isArray(cart) &&
            cart.length > 0 &&
            cart.filter((item) => item.category === "service").length > 0 ? (
              <div className="w-full min-w-[350px] h-full">
                <Card className="w-full min-w-[350px]">
                  <CardHeader>
                    <CardTitle>Marcação de Horários</CardTitle>
                    <CardDescription>
                      Caso você tenha adquirido um serviço, marque o horário
                      abaixo e informe o dia e a hora que deseja ser atendido,
                      além do profissional que deseja que te atenda.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1 flex flex-col items-start justify-start gap-2 mb-4">
                      <Label htmlFor="password">Data</Label>
                      <DatePicker />
                    </div>
                    <div className="space-y-1 flex flex-col items-start justify-start gap-2">
                      <Label htmlFor="password">Profissional</Label>
                      <Select>
                        <SelectTrigger className="w-full text-gray-500">
                          <SelectValue
                            placeholder="Nome do Profissional"
                            className="w-full"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Nome do Profissional</SelectLabel>
                            <SelectItem value="marcelo_silva">
                              Marcelo Silva
                            </SelectItem>
                            <SelectItem value="pedro_duarte">
                              Pedro Duarte
                            </SelectItem>
                            <SelectItem value="joao_paulo">
                              João Paulo
                            </SelectItem>
                            <SelectItem value="maria_pereira">
                              Maria Pereira
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="w-full flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-row items-center justify-start gap-4">
                      <Switch id="hour" className="w-4 h-4" />
                      <Label htmlFor="hour" className="text-gray-500">
                        Estou ciente que o horário marcado é uma previsão e pode
                        ser alterado.
                      </Label>
                    </div>
                    <Separator className="w-full" />
                    <Button>Marcar Horário</Button>
                  </CardFooter>
                </Card>
              </div>
            ) : null}
          </div>
        </div>
      </WrapperWithTitle>
    </div>
  );
}
