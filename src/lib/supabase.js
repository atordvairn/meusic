import { createClient } from "@supabase/supabase-js";

export let supabase = createClient(
  "https://tlrawygsyhwscgpzvhql.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscmF3eWdzeWh3c2NncHp2aHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ4Mzg4MzcsImV4cCI6MTk3MDQxNDgzN30.J_404ifM4i3Apq7lfp1_79nPMFezOHN14c7YiG6ZgJo"
);
