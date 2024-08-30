import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
// Replace 'YOUR_SUPABASE_URL' and 'YOUR_SUPABASE_KEY' with your actual Supabase URL and key
// Load environment variables from .env file
dotenv.config();

// Get the Supabase URL and key from environment variables
const supabaseUrl = process.env.SUPABASE_URL!!;
const supabaseKey = process.env.SUPABASE_KEY!!;

// Create a new Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Test the connection
async function testConnection() {
    try {
        const { data, error } = await supabase.from('your_table_name').select();

        if (error) {
            console.error('Error connecting to Supabase:', error);
        } else {
            console.log('Connected to Supabase:', data);
        }
    } catch (error) {
        console.error('Error connecting to Supabase:', error);
    }
}

testConnection();