const SITE = "https://blumacawtech.com";

type Step = { step?: number; title: string; description?: string };
type Faq = { question: string; answer: string };

/**
 * Builds HowTo + FAQPage + BreadcrumbList structured data for a documentation guide page.
 * Used so search engines and AI assistants can parse the steps and answers on each guide.
 */
export const buildGuideJsonLd = ({
  title,
  description,
  path,
  steps,
  faqs,
}: {
  title: string;
  description: string;
  path: string;
  steps?: Step[];
  faqs?: Faq[];
}) => {
  const url = `${SITE}${path}`;
  const graph: Record<string, unknown>[] = [];

  if (steps?.length) {
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto`,
      name: title,
      description,
      totalTime: "PT10M",
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.description ?? s.title,
        url: `${url}#step-${s.step ?? i + 1}`,
      })),
    });
  }

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Documentation", item: `${SITE}/documentation` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  });

  return { "@context": "https://schema.org", "@graph": graph };
};
