-- Create purchases table for Stripe payments tracking
CREATE TABLE IF NOT EXISTS purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Stripe data
  stripe_session_id TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT,

  -- Customer info
  customer_email TEXT,
  customer_name TEXT,

  -- Payment details
  amount_total BIGINT, -- Amount in cents
  amount_subtotal BIGINT,
  currency TEXT DEFAULT 'mxn',
  payment_status TEXT, -- paid, unpaid, no_payment_required
  status TEXT DEFAULT 'pending', -- pending, completed, failed, refunded

  -- Metadata
  metadata JSONB,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_purchases_stripe_session_id ON purchases(stripe_session_id);
CREATE INDEX idx_purchases_customer_email ON purchases(customer_email);
CREATE INDEX idx_purchases_status ON purchases(status);
CREATE INDEX idx_purchases_created_at ON purchases(created_at DESC);

-- Enable Row Level Security
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for webhook)
CREATE POLICY "Allow webhook inserts"
  ON purchases FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow service role full access
CREATE POLICY "Allow service role full access"
  ON purchases
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Users can view their own purchases by email
CREATE POLICY "Users can view own purchases"
  ON purchases FOR SELECT
  TO anon
  USING (customer_email = current_setting('request.jwt.claims', true)::json->>'email');

-- Add trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_purchases_updated_at
  BEFORE UPDATE ON purchases
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comment
COMMENT ON TABLE purchases IS 'Stores Stripe payment session data and purchase history';
