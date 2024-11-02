// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xpumowfrrpgdjtxeottu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwdW1vd2ZycnBnZGp0eGVvdHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NzQ1NjEsImV4cCI6MjA0NjE1MDU2MX0.wzfSv55ilWKubBLc-3SA87rn6kCHl1ieASf4DS2-PI8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
