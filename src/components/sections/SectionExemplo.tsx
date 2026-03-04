import Image from "next/image";
import LogoWhatsapp from "@/assets/logo-rocket.svg"

export default function Logo() {
  return (
    <Image
      src={LogoWhatsapp}
      alt="Logo RocketJR"
      width={200}
      height={80}
    />
  );
}