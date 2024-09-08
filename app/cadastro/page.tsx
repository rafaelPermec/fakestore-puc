import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WrapperWithTitle from "@/components/WrapperWithTitle/WrapperWithTitle";
import { ClientInputs, PetInputs } from "@/mock/inputs-mock";

export default function Cadastro() {
  return (
    <div className="items-center justify-items-center min-h-[40dvw] p-8 pb-20 gap-16 sm:p-20 bg-white">
      <WrapperWithTitle
        title="Preocupado com seu pet?"
        subtitle="Cadastre-se e tenha acesso a diversos serviços!"
      >
        <Tabs
          defaultValue="cliente"
          className="w-full flex flex-col items-center justify-center gap-2"
        >
          <TabsList className="grid grid-cols-2 w-[200px] gap-2">
            <TabsTrigger value="cliente">Cliente</TabsTrigger>
            <TabsTrigger value="pet">Pet</TabsTrigger>
          </TabsList>
          <TabsContent
            value="cliente"
            className="w-full flex flex-row items-center justify-center"
          >
            <Card className="w-[80%] min-w-[350px]">
              <CardHeader>
                <CardTitle>Cadastro do Cliente</CardTitle>
                <CardDescription>
                  Preencha suas informações e logo após, preencha os dados do
                  seu pet!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {ClientInputs.map((input) => (
                  <div className="space-y-1">
                    <Label htmlFor={input.id}>{input.label}</Label>
                    <Input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                    />
                  </div>
                ))}
              </CardContent>
              <CardFooter className="w-full flex justify-end">
                <Button>Cadastrar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent
            value="pet"
            className="w-full flex items-center justify-center"
          >
            <Card className="w-[80%] min-w-[350px]">
              <CardHeader>
                <CardTitle>Cadastro do seu Pet</CardTitle>
                <CardDescription>
                  Preencha as informações do seu pet e forneça mais informações
                  sobre você!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {PetInputs.map((input) => (
                  <div className="space-y-1">
                    <Label htmlFor={input.id}>{input.label}</Label>
                    <Input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                    />
                  </div>
                ))}
              </CardContent>
              <CardFooter className="w-full flex justify-end">
                <Button>Cadastrar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </WrapperWithTitle>
    </div>
  );
}
