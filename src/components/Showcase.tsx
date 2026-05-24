import showcasePricing from "@/assets/showcase-pricing.jpg";
import showcaseVolume from "@/assets/showcase-volume.jpg";
import showcaseRegistration from "@/assets/showcase-registration.jpg";
import showcaseBulk from "@/assets/showcase-bulk.jpg";
import showcaseLimits from "@/assets/showcase-limits.jpg";

const items = [
  {
    image: showcasePricing,
    label: "Create Pricing that",
    highlight: "Drives Volume",
  },
  {
    image: showcaseVolume,
    label: "Set Smart",
    highlight: "Quantity Breaks",
  },
  {
    image: showcaseRegistration,
    label: "Approve Buyers",
    highlight: "Instantly",
  },
  {
    image: showcaseBulk,
    label: "Frictionless",
    highlight: "Bulk Ordering",
  },
  {
    image: showcaseLimits,
    label: "Protect Margins &",
    highlight: "Net Terms",
  },
];

const Showcase = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[hsl(222,50%,8%)]">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-white">
            Wholesale Features that{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Power Growth
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Everything you need to run a professional B2B wholesale channel — beautifully designed, effortlessly powerful.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={item.image}
                alt={`${item.label} ${item.highlight}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/90 text-xs sm:text-sm font-medium leading-snug">
                  {item.label}{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    {item.highlight}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
