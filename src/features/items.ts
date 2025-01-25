import {items, Item} from '../data/items'

const listItems = (): Item[] => items

const addItem = (item: Item): void => {
    items.push(item)
}

export { listItems, addItem }

