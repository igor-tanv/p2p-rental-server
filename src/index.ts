import express from 'express';
import apiRoutes from './api';

const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use('/api', apiRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
