import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vqhvfexirggvfbhmffnm.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxaHZmZXhpcmdndmZiaG1mZm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2OTQ2NjksImV4cCI6MjAzNzI3MDY2OX0.UP20W1UGKydc1w0d0WHf1EoTWoxldJgCr2yTITYI-j8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
