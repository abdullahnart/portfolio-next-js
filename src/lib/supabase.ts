import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://vodmoawqpqcsyqwzmcjz.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjI0MTE0OGJmLWVkOWYtNGE5NS04Mzk2LWIyNDAzNmQyMjU5MSJ9.eyJwcm9qZWN0SWQiOiJ2b2Rtb2F3cXBxY3N5cXd6bWNqeiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzY4OTk5NzM4LCJleHAiOjIwODQzNTk3MzgsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.8un_C3zjj5ffGBGLSLkLEOQ0aENJCSMPD88xjM9wGa0';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };