ALTER TABLE public.affiliate_applications
  ADD COLUMN IF NOT EXISTS country text,
  ADD COLUMN IF NOT EXISTS shopify_partner_url text,
  ADD COLUMN IF NOT EXISTS works_with_merchants text,
  ADD COLUMN IF NOT EXISTS merchants_per_month text,
  ADD COLUMN IF NOT EXISTS social_links text,
  ADD COLUMN IF NOT EXISTS promoted_apps_before text,
  ADD COLUMN IF NOT EXISTS promoted_apps_list text,
  ADD COLUMN IF NOT EXISTS b2b_experience text,
  ADD COLUMN IF NOT EXISTS merchant_types text,
  ADD COLUMN IF NOT EXISTS heard_about text,
  ADD COLUMN IF NOT EXISTS good_fit_reason text;