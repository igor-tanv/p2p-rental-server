import request, { Response } from 'supertest';
import app, { stopServer } from '../src/index';
import { rentals } from '../src/features/rentals'
import { Item } from '../src/data/items';

describe('Rentals API', () => {
    afterAll(() => {
        stopServer();
    });

    beforeEach(() => {
        rentals.splice(0, rentals.length);
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

    it('should fail to return an item that is not rented', async () => {
        const response: Response = await request(app)
            .post('/api/return')
            .send({ item });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'This item is not currently rented.',
        });
    });


});
