import express, { Request, Response } from 'express';
import { listItems, addItem, Item } from './features/items';
import { rentItem, returnItem } from './features/rentals';

const router = express.Router();

router.get('/items', (req: Request, res: Response): void => {
    const items = listItems();
    res.json(items);
});

router.post('/items', (req: Request, res: Response): void => {
    const item: Item = req.body;
    addItem(item);
    res.status(201).json(item);
});

router.post('/rent', (req: Request, res: Response): void => {
    const { item, startDate, endDate } = req.body;
    try {
        const result = rentItem(item, startDate, endDate);
        res.status(200).json({ message: result });
    } catch (error: unknown) { 
        res.status(400).json({ error: (error as Error).message });
    }
});

router.post('/return', (req: Request, res: Response): void => {
    const {item}: {item: Item} = req.body

    try {
        const result = returnItem(item)
        res.status(200).json({message: result})
    } catch (error: unknown) {
        res.status(400).json({error: (error as Error).message})
    }
})

export default router;
