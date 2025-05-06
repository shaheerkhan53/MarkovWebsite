// components/ContactButton.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactButton() {
  return (
    <>
      <Button className="hidden md:block px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-l from-[#1C2B2B] to-[#2BC4C1] bg-[length:100%_200%] bg-left shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2BC4C1] animated-gradient">
        <Link href="/contact" className="text-white">
          Contact Us
        </Link>
      </Button>

      <style jsx>{`
        .animated-gradient:active {
          animation: moveGradient 0.8s ease-in-out;
        }

        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
