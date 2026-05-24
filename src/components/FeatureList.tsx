import featureWholesale from "@/assets/feature-wholesale-crop.png";
import featureVolume from "@/assets/feature-volume-crop.png";
import featureRegistration from "@/assets/feature-registration-crop.png";
import featureCsv from "@/assets/feature-csv-crop.png";
import featureLimits from "@/assets/feature-limits-crop.png";
import featureGroups from "@/assets/feature-groups-crop.png";
import featurePaymentShipping from "@/assets/feature-payment-shipping.png";

const features = [
  {
    image: featureWholesale,
    title: "Wholesale Pricing",
    description: "Create exclusive customer-specific wholesale pricing to boost loyalty and profit.",
    span: "md:col-span-2",
  },
  {
    image: featureVolume,
    title: "Volume & Tiered Pricing",
    description: "Increase average order value with quantity breaks pricing on customer type.",
    span: "",
  },
  {
    image: featureRegistration,
    title: "Registration Forms",
    description: "Approve and manage B2B buyers with registration forms with auto-tag.",
    span: "",
  },
  {
    image: featureCsv,
    title: "CSV/XLSX Bulk Ordering",
    description: "Enable fast, high-volume ordering for repeat buyers with CSV and Excel uploads.",
    span: "md:col-span-2",
  },
  {
    image: featureLimits,
    title: "Min/Max Order Limits",
    description: "Set min/max wholesale order limits to protect margins by quantity or amount.",
    span: "",
  },
  {
    image: featureGroups,
    title: "Unified B2C & B2B Store",
    description: "Run retail and wholesale seamlessly in one storefront — no separate setup required.",
    span: "",
  },
  {
    image: featurePaymentShipping,
    title: "Custom Payment & Shipping",
    description: "Set NET 15/30/60 payment terms, custom shipping rates, sort and hide payment methods.",
    span: "md:col-span-2",
  },
];

const FeatureList = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Platform Features</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Everything You Need — No Coding Required
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Works with Checkout, Shopify Admin, and Shopify Markets out of the box
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 ${f.span}`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-muted/20">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
