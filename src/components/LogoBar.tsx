import { useState } from "react";
import bpckwLogo from "@/assets/logos/bpckw.png";
import satyamFarmAsset from "@/assets/logos/satyam-farm.png";
import lexiconAsset from "@/assets/logos/lexicon-medical-supply.png";
import fanHubAsset from "@/assets/logos/fan-hub.png";
import theGoodCheeseBoneAsset from "@/assets/logos/the-good-cheese-bone.png";
import forsportsAsset from "@/assets/logos/forsports.png";
import footaidAsset from "@/assets/logos/footaid.png";
import kristallGrossistenAsset from "@/assets/logos/kristallgrossisten.png";
import nikkoBtbStoreAsset from "@/assets/logos/nikko-btb-store.png";
import poppyBeansAsset from "@/assets/logos/poppy-beans.png";
import magicgooAsset from "@/assets/logos/magicgoo.png";
import hamiltonSinklerAsset from "@/assets/logos/hamilton-sinkler.png";

type Brand = { name: string; domain?: string; logo?: string; wideLogo?: boolean };

const brands: Brand[] = [
  { name: "Flambette", domain: "flambette.com" },
  { name: "thegoodcheesebonewholesale", logo: theGoodCheeseBoneAsset, wideLogo: true },
  { name: "Forsports", logo: forsportsAsset, wideLogo: true },
  { name: "FootAid", logo: footaidAsset, wideLogo: true },
  { name: "KristallGrossisten", logo: kristallGrossistenAsset, wideLogo: true },
  { name: "Smoking Cat Distribution", domain: "smokingcatdistribution.ca" },
  { name: "bpckw", logo: bpckwLogo },
  { name: "Rising Wholesale Inc.", domain: "risingwholesale.com" },
  { name: "Satyam Farm", logo: satyamFarmAsset },
  { name: "Lexicon Medical Supply", logo: lexiconAsset },
  { name: "Fan Hub", logo: fanHubAsset },
  { name: "NIKKO BtB STORE", logo: nikkoBtbStoreAsset, wideLogo: true },
  { name: "Poppy Beans", logo: poppyBeansAsset, wideLogo: true },
  { name: "Magicgoo", logo: magicgooAsset, wideLogo: true },
  { name: "Hamilton Sinkler", logo: hamiltonSinklerAsset, wideLogo: true },
];



const logoToken = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;

const badgeStyles = [
  "bg-primary/15 text-primary ring-1 ring-primary/20",
  "bg-secondary/15 text-secondary ring-1 ring-secondary/20",
  "bg-accent/15 text-accent ring-1 ring-accent/20",
  "bg-primary/10 text-primary ring-1 ring-primary/15",
  "bg-secondary/10 text-secondary ring-1 ring-secondary/15",
];

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const BrandMark = ({
  brand,
  index,
  className = "",
}: {
  brand: Brand;
  index: number;
  className?: string;
}) => {
  const [failed, setFailed] = useState(false);
  const src = brand.logo ?? (brand.domain && logoToken
    ? `https://img.logo.dev/${brand.domain}?token=${logoToken}&size=128&format=png&retina=true`
    : undefined);
  const showLogo = src && !failed;

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {showLogo ? (
        <img
          src={src}
          alt={`${brand.name} logo`}
          loading="lazy"
          width={40}
          height={40}
          onError={() => setFailed(true)}
          className={`${brand.wideLogo ? "w-20 sm:w-24" : "w-10 sm:w-12"} h-10 sm:h-12 rounded-lg object-contain shrink-0 bg-card shadow-card ring-1 ring-border/40 p-1`}
        />
      ) : (
        <span
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 shadow-card ${badgeStyles[index % badgeStyles.length]}`}
        >
          {initials(brand.name)}
        </span>
      )}
      <span className="text-base sm:text-lg font-semibold text-foreground whitespace-nowrap tracking-tight">
        {brand.name}
      </span>
    </div>
  );
};

const LogoBar = () => {
  return (
    <section className="py-12 sm:py-16 px-4 border-y border-border/30 overflow-hidden bg-gradient-to-r from-primary/[0.08] via-background to-secondary/[0.08]">
      <p className="text-center text-sm sm:text-base font-bold tracking-widest uppercase text-gradient mb-8 sm:mb-10">
        Trusted by wholesale &amp; B2B brands worldwide
      </p>

      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-scroll-x items-center hover:[animation-play-state:paused]">
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="flex shrink-0 items-center"
              aria-hidden={setIndex === 1 ? true : undefined}
            >
              {brands.map((brand, brandIndex) => (
                <BrandMark
                  key={`${setIndex}-${brand.name}`}
                  brand={brand}
                  index={brandIndex}
                  className="flex-shrink-0 mx-4 sm:mx-6"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
