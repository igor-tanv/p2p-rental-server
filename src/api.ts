import express from 'express';

const router = express.Router();

router.get('/items', (req, res) => {
    res.json({ message: "List of items" });
});


router.post('/rent', (req, res) => {
    res.json({ message: "Rent an item" });
});

export default router;
