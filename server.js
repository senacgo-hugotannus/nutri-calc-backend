const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const supabaseUrl = 'https://gphnhovvuoeydruvdgis.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwaG5ob3Z2dW9leWRydXZkZ2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NjcwNTUsImV4cCI6MjA0NDE0MzA1NX0.BI5OV1MEoUnWVmOpfUvp75d7pEHx-TVlHZiOfQuD-6M';
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/api/create', async (req, res) => {
    const { data, error } = await supabase
        .from('registros')
        .select('*');

    if (error) return res.status(500).json(error);
    res.json(data);
});
app.post('/api/create', async (req, res) => {
    const { body } = req;

    const { data, error } = await supabase
        .from('registros')
        .insert([body]);

    if (error) return res.status(500).json(error);
    res.status(201).json(data);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
