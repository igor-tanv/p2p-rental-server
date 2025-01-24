import express, {Application} from 'express';
import apiRoutes from './api';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, (): void => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
