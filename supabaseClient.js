// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hclmedywldaaqfzhudct.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbG1lZHl3bGRhYXFmemh1ZGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMzU0MzUsImV4cCI6MjAzODcxMTQzNX0.t89FvBl4cKkczYbfKh8NX8bPfw_6VHFtwtoasxOiWVM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});
