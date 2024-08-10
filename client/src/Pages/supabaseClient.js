import { createClient } from '@supabase/supabase-js';

// Your Supabase project URL and public API key
const supabaseUrl = "https://hxyvgrrhwvvkjarvfndc.supabase.co"; // Replace with your Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eXZncnJod3Z2a2phcnZmbmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4MzU3MDYsImV4cCI6MjAzNTQxMTcwNn0.rQWC-jzP5SNbMNFvVFkxyU1G_a1lpd4tzflKD48-emo"; // Replace with your public API key

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
