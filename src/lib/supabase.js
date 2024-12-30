// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

// Inserisci il tuo URL di Supabase e la chiave anonima
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
