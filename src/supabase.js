import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://iesybyemimmyoehwdfce.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imllc3lieWVtaW1teW9laHdkZmNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwNzE3MDksImV4cCI6MjAwNTY0NzcwOX0.6ketNn0-Fq47uU5tq7Kn8dBHoeZKi9e2R01eGETib8I'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase