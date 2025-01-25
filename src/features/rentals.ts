import { Item } from './items'; 

type Rental = {
    item: Item; 
    startDate: string;
    endDate: string;
};

const rentals: Rental[] = []; 

const isDateRangeOverlapping = (start1: Date, end1: Date, start2: Date, end2: Date): boolean => {
    return (start1 <= end2 && start2 <= end1);
};

const hasConflict = (item: Item, startDate: string, endDate: string): boolean => { 
    const newStart = new Date(startDate);
    const newEnd = new Date(endDate);

    //check if any existing rental for the same item has an overlapping date range
    return rentals.some((rental) => {
        return (
            rental.item.id === item.id &&
            isDateRangeOverlapping(newStart, newEnd, new Date(rental.startDate), new Date(rental.endDate))
        );
    });
};

const rentItem = (item: Item, startDate: string, endDate: string): string => { 
    if (hasConflict(item, startDate, endDate)) {
        throw new Error('The item is already rented for the selected date range.');
    }

    rentals.push({ item, startDate, endDate }); 
    return 'Rental successful';
};

export { Rental, rentals, rentItem }; 
