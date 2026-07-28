import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import reviewsHeroImg from "@/assets/reviews-hero.webp";

const Reviews = () => {
  const reviews = [
    {
      text: "wow, very easy to use. We transitioned from Wholesale Gorilla after their app outage and have not looked back. More features, lower cost, smooth interface and great support. Thank you Utie!",
      store: "Smoking Cat Distribution",
      location: "Canada",
      date: "July 2026",
    },
    {
      text: "Amazing App, great help for my problem of handling B2B service, and the support from the team is outstanding, they understand my problem and resolve it within no time, hats off to them and good luck. Highly recommended if you do B2B business.",
      store: "bpckw",
      location: "Kuwait",
      date: "July 2026",
    },
    {
      text: "This app and developer team is very good, very supporting at speed dial.",
      store: "Rising Wholesale Inc.",
      location: "United States",
      date: "June 2026",
    },

    {
      text: "We are very happy with the app.. its powerful and user friendly wholesale app. We are impressed with the functionality to support our wholesale operations. In addition, they have amazing support team... We got instant support and they were able to help us through the set up process. Overall, very satisfied.",
      store: "Satyam Farm",
      location: "United States",
      date: "March 2026",
    },
    {
      text: "Very responsive customer support. Easy to implement.",
      store: "Lexicon Medical Supply",
      location: "United States",
      date: "April 2026",
    },
    {
      text: "This app completely solved my wholesale pricing issues. The team is very professional, responds quickly, and is always helpful — highly recommended!",
      store: "Fan Hub",
      location: "Lebanon",
      date: "February 2026",
    },
    {
      text: "We struggled with several wholesale apps before finding this one — most were very confusing or didn't display pricing correctly. BMT wholesale pricing app solved those pain points instantly. We can easily set different discounts, created a wholesale registration form, and manage customer tiers, while everything integrates smoothly with Shopify.",
      store: "VRD MASALE",
      location: "India",
      date: "February 2026",
    },
    {
      text: "We were previously running two separate portals for our customers — one for B2C and another for B2B. As part of consolidating everything into a single B2C store, we needed a reliable wholesale solution — and BMT Wholesale Pricing has been a great fit. The app was very easy to set up and integrates seamlessly with Shopify.",
      store: "MithilaShri",
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight font-montserrat">
              Success Stories
            </h2>
            <p className="text-muted-foreground text-base mb-8">
              Hear directly from our customers growing their wholesale business.
            </p>

            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {reviews.map((review, index) => (
                  <div key={index} className="min-w-0 shrink-0 grow-0 basis-full">
                    <div>
                      <div className="flex gap-1 mb-5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-base sm:text-lg leading-relaxed mb-8 text-foreground">
                        {review.text}
                      </p>
                      <p className="font-semibold text-foreground">
                        — {review.store}, {review.location}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {review.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
