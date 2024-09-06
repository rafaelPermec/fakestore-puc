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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WrapperWithTitle from "@/components/WrapperWithTitle/WrapperWithTitle";

export default function Cadastro() {
  const ClientInputs = [
    {
      label: "Nome",
      type: "text",
      id: "name",
      defaultValue: "Pedro Duarte",
      placeholder: "Digite seu nome",
    },
    {
      label: "Nome de Usuário",
      type: "text",
      id: "username",
      defaultValue: "",
      placeholder: "Digite seu nome de usuário",
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      defaultValue: "",
      placeholder: "Digite seu email",
    },
    {
      label: "Endereço",
      type: "text",
      id: "address",
      defaultValue: "Pedro Duarte",
      placeholder: "Digite seu endereço",
    },
    {
      label: "Complemento de Endereço",
      type: "text",
      id: "addressComplement",
      defaultValue: "Pedro Duarte",
      placeholder: "Campo para complemento do endereço",
    },
    {
      label: "Cidade e Estado",
      type: "text",
      id: "city",
      defaultValue: "",
      placeholder: "Digite sua cidade e estado",
    },
    {
      label: "CPF",
      type: "text",
      id: "cpf",
      defaultValue: "",
      placeholder: "000.000.000-00",
    },
    {
      label: "Senha",
      type: "password",
      id: "name",
      defaultValue: "",
      placeholder: "Senha com no mínimo 8 caracteres",
    },
    {
      label: "Confirme sua Senha",
      type: "password",
      id: "email",
      defaultValue: "",
      placeholder: "Confirme sua senha",
    },
  ];

  const PetInputs = [
    {
      label: "Nome",
      type: "text",
      id: "name",
      defaultValue: "Rex",
      placeholder: "Digite o nome do seu pet",
    },
    {
      label: "Raça",
      type: "text",
      id: "breed",
      defaultValue: "",
      placeholder: "Digite a raça do seu pet",
    },
    {
      label: "Idade",
      type: "number",
      id: "age",
      defaultValue: "",
      placeholder: "Digite a idade do seu pet",
    },
    {
      label: "Peso",
      type: "number",
      id: "weight",
      defaultValue: "",
      placeholder: "Digite o peso do seu pet",
    },
    {
      label: "Altura",
      type: "number",
      id: "height",
      defaultValue: "",
      placeholder: "Digite a altura do seu pet",
    },
    {
      label: "Gênero",
      type: "text",
      id: "gender",
      defaultValue: "",
      placeholder: "Digite o gênero do seu pet",
    },
    {
      label: "Observações",
      type: "text",
      id: "observations",
      defaultValue: "",
      placeholder: "Caso queira, diga mais sobre seu pet",
    },
  ];

  return (
    <div className="items-center justify-items-center min-h-[40dvw] p-8 pb-20 gap-16 sm:p-20 bg-white">
      <WrapperWithTitle title="Preocupado com seu pet?" subtitle="Cadastre-se e tenha acesso a diversos serviços!">
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
                {
                  ClientInputs.map((input) => (
                    <div className="space-y-1">
                      <Label htmlFor={input.id}>{input.label}</Label>
                      <Input id={input.id} type={input.type} placeholder={input.placeholder} />
                    </div>
                  ))
                }
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
                  Preencha as informações do seu pet e forneça mais informações sobre você!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {
                  PetInputs.map((input) => (
                    <div className="space-y-1">
                      <Label htmlFor={input.id}>{input.label}</Label>
                      <Input id={input.id} type={input.type} placeholder={input.placeholder} />
                    </div>
                  ))
                }
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
