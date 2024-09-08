"use client";
import { useRouter } from "next/navigation";

interface CTAProps {
  buttonText: string;
  isRedirect?: boolean;
  href?: string;
  action?: () => void;
}

const CTA: React.FC<CTAProps> = ({ 
  buttonText, 
  isRedirect = false, 
  href = "/",
  action,
 }) => {
  const router = useRouter();

  return (
    <button
      className="px-8 py-4 text-lg bg-[#B72E2E] rounded-lg hover:bg-red-700"
      onClick={() => {
        if (isRedirect) {
          router.push(href);
        } if (!isRedirect && action) {
          action();
        }
      }}
    >
      <p className="text-sm font-semibold text-white">{buttonText}</p>
    </button>
  );
};

export default CTA;
