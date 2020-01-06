import { ListGenerator } from './fifo-lifo.js';

export class FifoQueue extends ListGenerator  {
    
    remove() {
        const removedItem = this.list.shift();
        return removedItem;
    }

    nextToRemove() {
        const firstItem = this.list[0];
        return firstItem;
    }
};