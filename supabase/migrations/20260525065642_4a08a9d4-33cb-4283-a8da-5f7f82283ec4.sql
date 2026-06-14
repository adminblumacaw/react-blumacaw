CREATE TABLE public.affiliate_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  website TEXT,
  audience_type TEXT NOT NULL,
  audience_size TEXT,
  promotion_plan TEXT NOT NULL,
  agree_terms BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.affiliate_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an affiliate application"
ON public.affiliate_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);