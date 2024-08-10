import { createClient } from '@supabase/supabase-js';

// Your Supabase project URL and public API key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Replace with your Supabase URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Replace with your public API key

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);

// Ensure both variables are available before creating the client
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or Key is missing');
}

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
