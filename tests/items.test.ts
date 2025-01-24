import request, { Response } from 'supertest';
import app, {stopServer} from '../src/index';
import { Item } from '../src/features/items';


describe('Items API', () => {

    afterAll(() => {
        stopServer()
    })
    it('should add an item and return it', async () => {
        const newItem: Item = {
            id: '1',
            name: 'Drill',
            description: 'A power drill',
            price: 20,
            available: true,
        };

        const response: Response = await request(app)
            .post('/api/items')
            .send(newItem);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(newItem);
    });

    it('should list all items', async () => {
        const response: Response = await request(app).get('/api/items');
        expect(response.status).toBe(200);

        const items: Item[] = response.body;
        expect(items.length).toBeGreaterThan(0);
        items.forEach((item) => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('name');
            expect(item).toHaveProperty('description');
            expect(item).toHaveProperty('price');
            expect(item).toHaveProperty('available');
        });
    });
});
