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
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent
            value="pet"
            className="w-full flex items-center justify-center"
          >
            <Card className="w-[80%] min-w-[350px]">
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
