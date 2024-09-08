import CTA from "@/components/CTA/CTA";
import { Separator } from "@/components/ui/separator";
import WrapperWithTitle from "@/components/WrapperWithTitle/WrapperWithTitle";
import Image from "next/image";

const ProductsSection: React.FC = () => {
  return (
    <WrapperWithTitle
      title="Precisa de ajuda com seu pet?"
      subtitle="Conheça nossos produtos e serviços"
    >
      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/images/home/products.png"
            width={300}
            height={300}
            alt="Imagem de um produto"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col items-center justify-center gap-4 w-[80%]">
            <h3 className="text-2xl font-bold text-gray-700">Produtos</h3>
            <p className="text-lg text-gray-600 text-center">
              Conheça nossos produtos e veja como eles podem ajudar você.
            </p>
            <Separator className="w-[60%] bg-gray-200" />
            <CTA buttonText="Conheça" isRedirect href="/plp?type=products" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/images/home/services.jpg"
            width={300}
            height={300}
            alt="Imagem de um serviço"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col items-center justify-center gap-4 w-[80%]">
            <h3 className="text-2xl font-bold text-gray-700">Serviços</h3>
            <p className="text-lg text-gray-600 text-center">
              Conheça nossos serviços e veja como eles podem ajudar você.
            </p>
            <Separator className="w-[60%] bg-gray-200" />
            <CTA buttonText="Conheça" isRedirect href="/plp?type=services" />
          </div>
        </div>
      </div>
    </WrapperWithTitle>
  );
};

export default ProductsSection;
