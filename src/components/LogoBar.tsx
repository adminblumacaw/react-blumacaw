const logos = [
  { name: "Shopify", text: "Shopify" },
  { name: "Shopify Markets", text: "Shopify Markets" },
  { name: "CSV/Excel", text: "CSV & Excel" },
  { name: "Net Terms", text: "Net 15/30/60" },
  { name: "B2B", text: "B2B Ready" },
  { name: "D2C", text: "D2C Compatible" },
  { name: "Multi-Currency", text: "Multi-Currency" },
  { name: "Custom Forms", text: "Custom Forms" },
];

const LogoBar = () => {
  return (
    <section className="py-8 sm:py-10 px-4 border-y border-border/30 bg-muted/20 overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/20 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/20 to-transparent z-10" />

        <div className="flex animate-scroll-x">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-5 sm:mx-8 flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-card/80"
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
