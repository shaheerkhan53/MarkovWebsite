import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

interface ContactLinkButtonProps extends ButtonProps {
  href: string;
  children: ReactNode;
}

export function ContactLinkButton({ href, children, className, ...props }: ContactLinkButtonProps) {
  return (
    <Link href={href} className="no-underline">
      <Button className={className} {...props}>
        {children}
      </Button>
    </Link>
  );
} 