import { ListGenerator } from './fifo-lifo.js';

export class FifoQueue extends ListGenerator  {
    constructor() {
        super()
        this.lastRemoved = "";
    }
    remove() {
        const removedItem = this.list.shift();
        return removedItem;
    }

    nextToRemove() {
        if (this.list.length > 0) {
            const firstItem = this.list[0];
            this.lastRemoved = firstItem;
            return this.lastRemoved;
        }
        else return this.lastRemoved;
    }
};