// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsqqsanmmpimljmnlpab.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcXFzYW5tbXBpbWxqbW5scGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTc0NTUsImV4cCI6MjA2Mjk5MzQ1NX0.763UJfS0FWVNFmFBKpZ5NyCJ2TebV6HAKX3G2Jas598';
export const supabase = createClient(supabaseUrl, supabaseKey);