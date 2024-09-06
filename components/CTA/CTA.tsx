interface CTAProps {
  buttonText: string;
}

const CTA: React.FC<CTAProps> = ({ buttonText }) => {
  return (
    <button className="px-8 py-4 text-lg bg-[#B72E2E] rounded-lg hover:bg-red-700">
      <p className="text-sm font-semibold text-white">{buttonText}</p>
    </button>
  );
};

export default CTA;
