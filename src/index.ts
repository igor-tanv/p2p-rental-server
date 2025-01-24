import express, { Application, Request, Response } from 'express';
import apiRoutes from './api';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use('/api', apiRoutes);

let server: ReturnType<typeof app.listen> | null = null;

if (require.main === module) {
    server = app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export const stopServer = (): void => {
    if (server) {
        server.close((err?: Error) => {
            if (err) {
                console.error('Error shutting down server:', err);
            } else {
                console.log('Server stopped successfully');
            }
        });
    }
};

export default app;
