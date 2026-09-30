import Image from "next/image";

export function Logo({ variant = "dark", className }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <Image
      className={className}
      src={variant === "light" ? "/brand/logo-white.png" : "/brand/logo.png"}
      alt="AURA"
      width={201}
      height={60}
      priority
    />
  );
}
