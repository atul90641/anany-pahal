import { createClient } from '@supabase/supabase-js';

// Your Supabase project URL and public API key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Replace with your Supabase URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Replace with your public API key

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
