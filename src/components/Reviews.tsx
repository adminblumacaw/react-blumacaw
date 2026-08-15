import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import reviewsHeroImg from "@/assets/reviews-hero.webp";
import bpckwLogo from "@/assets/logos/bpckw.png";
import satyamFarmAsset from "@/assets/logos/satyam-farm.png";
import lexiconAsset from "@/assets/logos/lexicon-medical-supply.png";
import fanHubAsset from "@/assets/logos/fan-hub.png";
import nikkoAsset from "@/assets/logos/nikko-btb-store.png";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();


const ReviewAvatar = ({ review }: { review: { store: string; logo?: string; domain?: string } }) => {
  const [failed, setFailed] = useState(false);
  const logoToken = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;
  const src = review.logo ?? (review.domain && logoToken
    ? `https://img.logo.dev/${review.domain}?token=${logoToken}&size=128&format=png&retina=true`
    : undefined);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`${review.store} logo`}
        loading="lazy"
        width={40}
        height={40}
        onError={() => setFailed(true)}
        className="w-10 h-10 rounded-full object-contain shrink-0 bg-card shadow-card ring-1 ring-border/40 p-1"
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold shrink-0">
      {initials(review.store)}
    </div>
  );
};


const Reviews = () => {
    const reviews = [
    {
      text: "Amazing, I went to so many other apps before finding this one and I love it! Took a little tweaking as I am using a paid theme but Utakarsh has been amazing. The customer service level is 5 Stars! Thank you so much for your amazing app!",
      store: "Scavenger Supplies",
      domain: "scavengersupplies.com.au",
      location: "Australia",
      date: "August 2026",
    },
    {
      text: "The service provided from BMT was simply outstanding. Uti was hands on all the time I was setting up and helped me to navigate to where I wanted to be. He called me from India when I got stuck. The App is amazing and does exactly what we need for our business. I highly recommend this app.",
      store: "Electric Harness Systems",
      domain: "electricharnesssystems.com.au",
      location: "Australia",
      date: "August 2026",
    },
    {
      text: "Utakarsh has been amazing to work with! He's incredibly helpful, always taking the time to find solutions that fit my business needs. He's also very responsive, providing quick answers and support whenever I need it. I've been searching for a quick order page app like this for a long time, and I'm so glad I finally found the perfect solution.",
      store: "Flambette",
      domain: "flambette.com",
      location: "Canada",
      date: "July 2026",
    },
    {
      text: "wow, very easy to use. We transitioned from Wholesale Gorilla after their app outage and have not looked back. More features, lower cost, smooth interface and great support. Thank you Utie!",
      store: "Smoking Cat Distribution",
      domain: "smokingcatdistribution.ca",
      location: "Canada",
      date: "July 2026",
    },
    {
      text: "Amazing App, great help for my problem of handling B2B service, and the support from the team is outstanding, they understand my problem and resolve it within no time, hats off to them and good luck. Highly recommended if you do B2B business.",
      store: "bpckw",
      logo: bpckwLogo,
      location: "Kuwait",
      date: "July 2026",
    },
    {
      text: "This app and developer team is very good, very supporting at speed dial.",
      store: "Rising Wholesale Inc.",
      domain: "risingwholesale.com",
      location: "United States",
      date: "June 2026",
    },
    {
      text: "We are very happy with the app.. its powerful and user friendly wholesale app. We are impressed with the functionality to support our wholesale operations. In addition, they have amazing support team... We got instant support and they were able to help us through the set up process. Overall, very satisfied.",
      store: "Satyam Farm",
      logo: satyamFarmAsset,
      location: "United States",
      date: "March 2026",
    },
    {
      text: "Very responsive customer support. Easy to implement.",
      store: "Lexicon Medical Supply",
      logo: lexiconAsset,
      location: "United States",
      date: "April 2026",
    },
    {
      text: "This app completely solved my wholesale pricing issues. The team is very professional, responds quickly, and is always helpful — highly recommended!",
      store: "Fan Hub",
      logo: fanHubAsset,
      location: "Lebanon",
      date: "February 2026",
    },
    {
      text: "We struggled with several wholesale apps before finding this one — most were very confusing or didn't display pricing correctly. BMT wholesale pricing app solved those pain points instantly. We can easily set different discounts, created a wholesale registration form, and manage customer tiers, while everything integrates smoothly with Shopify.",
      store: "VRD MASALE",
      domain: "vrdmasale.com",
      location: "India",
      date: "February 2026",
    },
    {
      text: "We were previously running two separate portals for our customers — one for B2C and another for B2B. As part of consolidating everything into a single B2C store, we needed a reliable wholesale solution — and BMT Wholesale Pricing has been a great fit. The app was very easy to set up and integrates seamlessly with Shopify.",
      store: "MithilaShri",
      domain: "mithilashri.com",
      location: "India",
      date: "February 2026",
    },
    {
      text: "Finally a FREE Wholesale B2B price app! The assistance is really nice and helpful. It's in process so they will add function step by step. If there's any error they can help you well.",
      store: "THCUISINE",
      location: "France",
      date: "January 2026",
    },
    {
      text: "Great experience using BMT Wholesale Pricing — smooth setup and reliable performance for our B2B store.",
      store: "NIKKO BtB STORE",
      logo: nikkoAsset,
      location: "Japan",
      date: "August 2025",
    },
    {
      text: "We are a Yoga selling website and wanted to show special rates to our regular customers. BMT Wholesale made that possible. Now, we are able to show multiple rates to different type of users on the same page without any hassle. Special mention to the support team: Utakarsh patiently helped us set up tiered pricing and even jumped on a call to walk through some edge cases.",
      store: "Yogaratova",
      location: "India",
      date: "September 2025",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-16 sm:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-stretch">
          {/* Left — Image (hidden on mobile to reduce scroll) */}
          <div className="hidden md:block rounded-xl overflow-hidden">
            <img
              src={reviewsHeroImg}
              alt="Loved by merchants worldwide — 5.0 rating from Shopify brands"
              className="w-full h-auto md:max-h-[350px] lg:max-h-none lg:h-full object-contain"
              loading="lazy"
              decoding="async"
              width={900}
              height={900}
            />
          </div>

          {/* Right — Header + Carousel */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-3">
              In their words
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight font-montserrat text-balance">
              Loved by merchants worldwide.
            </h2>
            <p className="text-muted-foreground text-base mb-8">
              5.0 on the Shopify App Store · 14 reviews · 100% five stars
            </p>

            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {reviews.map((review, index) => (
                  <div key={index} className="min-w-0 shrink-0 grow-0 basis-full">
                    <article className="rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-8 shadow-card h-full">
                      <div className="flex items-center gap-3 mb-5">
                        <ReviewAvatar review={review} />
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground truncate">{review.store}</p>
                          <p className="text-xs text-muted-foreground">
                            {review.location} · {review.date}
                          </p>
                        </div>
                        <div className="flex gap-0.5 ml-auto">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-base sm:text-lg leading-relaxed text-foreground">
                        {review.text}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex gap-2">
                <button
                  onClick={scrollPrev}
                  aria-label="Previous review"
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Next review"
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <p className="sm:hidden text-sm text-muted-foreground tabular-nums">
                {selectedIndex + 1} / {reviews.length}
              </p>
              <div className="hidden sm:flex flex-wrap items-center">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className="inline-flex items-center justify-center sm:mr-2"
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={i === selectedIndex}
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        i === selectedIndex ? "w-6 bg-primary" : "w-1.5 bg-border"
                      }`}
                    />
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

