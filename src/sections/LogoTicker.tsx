import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLog from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import PulseLogo from "@/assets/logo-pulse.png";

export const LogoTicker = (props: any) => {
  const { theme } = props;
  return (
    <div className="py-8 md:py-12 bg-white dark:bg-black">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 dark:invert">
            <Image src={ApexLogo} alt="Apex Logo" className="h-8 w-auto " />
            <Image src={AcmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={EchoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image src={QuantumLog} alt="Quantum Logo" className="h-8 w-auto" />
            <Image src={PulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
