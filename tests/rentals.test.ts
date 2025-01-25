import request, { Response } from 'supertest';
import app, { stopServer } from '../src/index';
import { Item } from '../src/features/items';

describe('Rentals API', () => {
    afterAll(() => {
        stopServer();
    });

    const item: Item = {
        id: '1',
        name: 'Drill',
        description: 'Power drill',
        price: 20,
        available: true,
    };

    it('should rent an item successfully', async () => {
        const response: Response = await request(app)
            .post('/api/rent')
            .send({
                item,
                startDate: '2025-02-01',
                endDate: '2025-02-05',
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Rental successful' });
    });

    it('should prevent rental if there is a date conflict', async () => {
        //create the initial rental
        await request(app).post('/api/rent').send({
            item,
            startDate: '2025-02-01',
            endDate: '2025-02-05',
        });

        //attempt to rent the same item with a conflicting date
        const response: Response = await request(app)
            .post('/api/rent')
            .send({
                item,
                startDate: '2025-02-04',
                endDate: '2025-02-06',
            });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'The item is already rented for the selected date range.',
        });
    });
});
