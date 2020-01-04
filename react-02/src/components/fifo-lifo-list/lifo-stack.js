import { ListGenerator } from './fifo-lifo.js';

export class LifoStack extends ListGenerator {
    
    remove() {
        const removedItem = this.list.pop();
        return removedItem;
    }

    nextToRemove() {
        const lastItem = this.list.length - 1;
        return this.list[lastItem];
    }
};