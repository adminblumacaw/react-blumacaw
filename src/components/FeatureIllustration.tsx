import {
  BadgeCheck,
  Calculator,
  CalendarClock,
  Check,
  ChevronDown,
  CircleDollarSign,
  FileSpreadsheet,
  GitBranch,
  Globe2,
  Languages,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquareQuote,
  Network,
  PackageCheck,
  Percent,
  ReceiptText,
  ShoppingBag,
  ShoppingCart,
  Store,
  Tag,
  Truck,
  Upload,
  UserRoundCheck,
  Users,
} from "lucide-react";

export type FeatureIllustrationType =
  | "pricing"
  | "tiers"
  | "locked"
  | "application"
  | "bulk-order"
  | "markets"
  | "terms"
  | "quote"
  | "limits"
  | "tax"
  | "invoicing"
  | "pos"
  | "controls"
  | "workflow"
  | "connected";

type Props = {
  type: FeatureIllustrationType;
};

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative h-36 overflow-hidden border-b border-border/60 bg-muted/50 sm:h-40" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-br from-card via-muted/20 to-secondary/10" />
    <div className="absolute inset-x-4 bottom-0 top-4 overflow-hidden rounded-t-md border border-border bg-card shadow-card sm:inset-x-5 sm:top-5">
      <div className="flex h-7 items-center gap-1.5 border-b border-border bg-muted/60 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-secondary/40" />
      </div>
      {children}
    </div>
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/60 px-2 py-1 text-[9px] font-semibold text-foreground">
    {children}
  </span>
);

const PriceRow = ({ name, retail, wholesale }: { name: string; retail: string; wholesale: string }) => (
  <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border/70 py-2 last:border-0">
    <span className="text-[10px] font-medium text-foreground">{name}</span>
    <span className="text-[9px] text-muted-foreground line-through">{retail}</span>
    <span className="text-[10px] font-bold text-primary">{wholesale}</span>
  </div>
);

const FeatureIllustration = ({ type }: Props) => {
  if (type === "pricing") {
    return <Frame><div className="px-4 py-3"><div className="mb-2 flex items-center justify-between"><Pill><Tag className="h-3 w-3 text-accent" /> Trade</Pill><span className="text-[9px] text-muted-foreground">Price list</span></div><PriceRow name="Amber Oil" retail="$24" wholesale="$16" /><PriceRow name="Cedar Soap" retail="$18" wholesale="$12" /></div></Frame>;
  }

  if (type === "tiers") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-end justify-center gap-2 px-5 pb-4 pt-3"><div className="flex h-12 w-16 items-center justify-center rounded-t-md bg-primary/10 text-[10px] font-bold text-primary">1–9</div><div className="flex h-16 w-16 items-center justify-center rounded-t-md bg-secondary/25 text-[10px] font-bold text-foreground">10–24</div><div className="flex h-20 w-16 items-center justify-center rounded-t-md bg-accent/70 text-[10px] font-bold text-accent-foreground">25+</div></div></Frame>;
  }

  if (type === "locked") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center justify-center gap-5 px-5"><div className="space-y-2 opacity-50"><div className="h-3 w-24 rounded bg-muted" /><div className="h-3 w-16 rounded bg-muted" /><div className="h-3 w-20 rounded bg-muted" /></div><div className="flex h-16 w-16 items-center justify-center rounded-lg border border-primary/20 bg-primary/10"><LockKeyhole className="h-7 w-7 text-primary" /></div></div></Frame>;
  }

  if (type === "application") {
    return <Frame><div className="flex gap-3 px-4 py-3"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-secondary/20"><UserRoundCheck className="h-7 w-7 text-accent" /></div><div className="flex-1 space-y-2"><div className="h-3 rounded bg-muted" /><div className="h-3 w-4/5 rounded bg-muted" /><div className="flex items-center justify-between"><Pill>Wholesale buyer</Pill><BadgeCheck className="h-4 w-4 text-accent" /></div></div></div></Frame>;
  }

  if (type === "bulk-order") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center justify-center gap-4 px-4"><div className="rounded-lg border border-border bg-muted/40 p-3"><FileSpreadsheet className="h-7 w-7 text-accent" /><span className="mt-1 block text-[9px] font-semibold">PO.csv</span></div><Upload className="h-5 w-5 text-muted-foreground" /><div className="relative rounded-lg bg-primary/10 p-3"><ShoppingCart className="h-7 w-7 text-primary" /><span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground">48</span></div></div></Frame>;
  }

  if (type === "markets") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center justify-center gap-4 px-4"><Globe2 className="h-16 w-16 text-primary/80" /><div className="space-y-2"><Pill><Languages className="h-3 w-3" /> EN</Pill><Pill><MapPin className="h-3 w-3" /> EU · EUR</Pill><Pill><MapPin className="h-3 w-3" /> US · USD</Pill></div></div></Frame>;
  }

  if (type === "terms") {
    return <Frame><div className="px-4 py-3"><div className="mb-3 flex items-center gap-2"><CalendarClock className="h-6 w-6 text-primary" /><span className="text-[11px] font-bold">Payment terms</span></div><div className="grid grid-cols-3 gap-2"><div className="rounded-md border border-border p-2 text-center text-[9px]">NET<br/><b>15</b></div><div className="rounded-md border border-accent bg-secondary/15 p-2 text-center text-[9px]">NET<br/><b>30</b></div><div className="rounded-md border border-border p-2 text-center text-[9px]">NET<br/><b>60</b></div></div><div className="mt-2 flex items-center gap-2 text-[9px] text-muted-foreground"><Truck className="h-3 w-3" /> Custom shipping rule</div></div></Frame>;
  }

  if (type === "quote") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center gap-4 px-5"><MessageSquareQuote className="h-14 w-14 shrink-0 text-accent" /><div className="flex-1 rounded-lg border border-border p-3"><div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-bold">Quote #1042</span><Pill>Pending</Pill></div><div className="h-2 rounded bg-muted" /><div className="mt-2 flex justify-end"><span className="rounded bg-primary px-2 py-1 text-[9px] font-semibold text-primary-foreground">Review</span></div></div></div></Frame>;
  }

  if (type === "limits") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center justify-center gap-3 px-4"><PackageCheck className="h-12 w-12 text-primary" /><div className="space-y-2"><div className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-[10px]"><Check className="h-3 w-3 text-accent" /> MOQ: 24 units</div><div className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-[10px]"><Check className="h-3 w-3 text-accent" /> Case pack: 6</div></div></div></Frame>;
  }

  if (type === "tax") {
    return <Frame><div className="grid h-[calc(100%-1.75rem)] grid-cols-2 divide-x divide-border"><div className="flex flex-col items-center justify-center gap-2"><Users className="h-7 w-7 text-primary" /><span className="text-[9px] text-muted-foreground">Trade</span><b className="text-sm">€100</b><Pill>ex VAT</Pill></div><div className="flex flex-col items-center justify-center gap-2"><ShoppingBag className="h-7 w-7 text-accent" /><span className="text-[9px] text-muted-foreground">Retail</span><b className="text-sm">€120</b><Pill>inc VAT</Pill></div></div></Frame>;
  }

  if (type === "invoicing") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center justify-center gap-3 px-4"><div className="rounded-lg border border-border bg-card p-3 shadow-card"><ReceiptText className="h-7 w-7 text-primary" /><span className="mt-1 block text-[9px] font-bold">INV-0184</span></div><GitBranch className="h-5 w-5 text-muted-foreground" /><div className="space-y-2"><Pill><Mail className="h-3 w-3" /> Sent</Pill><Pill><FileSpreadsheet className="h-3 w-3" /> Drive</Pill></div></div></Frame>;
  }

  if (type === "pos") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center justify-center gap-4 px-4"><div className="rounded-lg border border-border bg-card p-3"><Store className="h-8 w-8 text-primary" /><span className="mt-1 block text-[9px] font-semibold">Shopify POS</span></div><Percent className="h-8 w-8 text-accent" /><div className="text-center"><span className="block text-xl font-bold text-primary">−20%</span><span className="text-[9px] text-muted-foreground">Wholesale</span></div></div></Frame>;
  }

  if (type === "controls") {
    return <Frame><div className="px-4 py-3"><div className="mb-2 flex gap-2"><Pill><Tag className="h-3 w-3" /> Distributor</Pill><Pill>Tax exempt</Pill></div><div className="space-y-2"><div className="flex items-center justify-between rounded-md bg-muted/60 px-3 py-2 text-[10px]"><span>Price adjustment</span><b>−30%</b></div><div className="flex items-center justify-between rounded-md bg-muted/60 px-3 py-2 text-[10px]"><span>Customer group</span><ChevronDown className="h-3 w-3" /></div></div></div></Frame>;
  }

  if (type === "workflow") {
    return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center justify-center px-3"><div className="flex items-center"><div className="rounded-md border border-border p-2 text-center"><ShoppingCart className="mx-auto h-5 w-5 text-primary"/><span className="text-[8px]">Order</span></div><span className="h-px w-4 bg-border"/><div className="rounded-md border border-accent bg-secondary/15 p-2 text-center"><Calculator className="mx-auto h-5 w-5 text-accent"/><span className="text-[8px]">Rules</span></div><span className="h-px w-4 bg-border"/><div className="rounded-md border border-border p-2 text-center"><Truck className="mx-auto h-5 w-5 text-primary"/><span className="text-[8px]">Ship</span></div></div></div></Frame>;
  }

  return <Frame><div className="flex h-[calc(100%-1.75rem)] items-center justify-center gap-3 px-4"><div className="rounded-lg bg-primary/10 p-3"><Network className="h-8 w-8 text-primary" /></div><div className="space-y-1"><span className="block h-px w-8 bg-border"/><span className="block h-px w-8 bg-border"/><span className="block h-px w-8 bg-border"/></div><div className="grid grid-cols-2 gap-2"><Pill>API</Pill><Pill>CRM</Pill><Pill>Bundle</Pill><Pill>Search</Pill></div></div></Frame>;
};

export default FeatureIllustration;