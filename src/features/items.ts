type Item = {
    id: string;
    name: string;
    description: string;
    price: number;
    available: boolean
}

const items: Item[] = []

const listItems = (): Item[] => items

const addItem = (item: Item): void => {
    items.push(item)
}

export {Item, listItems, addItem}

