import CTA from "@/components/CTA/CTA";

const Banner: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-[60dvh] w-full">
      <img
        src="/images/banner.jpg"
        alt="Banner"
        className="w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute z-10 flex flex-col items-center justify-center gap-4 text-white p-4">
        <h1 className="text-4xl font-bold text-center">Seja bem-vindo</h1>
        <p className="text-lg text-center">
          Conheça nossos produtos e serviços e veja como podemos ajudar você.
        </p>
        <CTA buttonText="Conheça" />
      </div>
    </div>
  );
};

export default Banner;
