type Item = {
    id: string;
    name: string;
    description: string;
    price: number;
    available: boolean
}

const items: Item[] = [
    {
        id: '1',
        name: 'Drill',
        description: 'A powerful drill for home projects.',
        price: 25,
        available: true,
    },
    {
        id: '2',
        name: 'Ladder',
        description: 'A ladder for outdoor use.',
        price: 15,
        available: true,
    },
    {
        id: '3',
        name: 'Camera',
        description: 'A DSLR camera for photography enthusiasts.',
        price: 50,
        available: true,
    },
    {
        id: '4',
        name: 'Hammer',
        description: 'A sturdy hammer for construction work.',
        price: 10,
        available: true,
    },
    {
        id: '5',
        name: 'Chainsaw',
        description: 'A chainsaw for cutting trees and heavy-duty tasks.',
        price: 75,
        available: true,
    },
];

export { items, Item };
