import express, {Request, Response} from 'express';
import {listItems, addItem, Item} from './features/items'

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

export default router;
