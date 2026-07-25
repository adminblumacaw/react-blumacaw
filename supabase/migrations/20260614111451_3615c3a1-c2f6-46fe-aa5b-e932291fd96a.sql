DROP POLICY IF EXISTS "Anyone can submit an affiliate application" ON public.affiliate_applications;
REVOKE ALL ON public.affiliate_applications FROM anon, authenticated;
GRANT ALL ON public.affiliate_applications TO service_role;
CREATE POLICY "Service role full access" ON public.affiliate_applications FOR ALL TO service_role USING (true) WITH CHECK (true);