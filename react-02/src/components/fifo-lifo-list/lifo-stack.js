import { ListGenerator } from './fifo-lifo.js';

export class LifoStack extends ListGenerator {
    constructor() {
        super()
        this.lastRemoved = "";
    }

    remove() {
        const removedItem = this.list.pop();
        return removedItem;
    }

    nextToRemove() {
        if (this.list.length > 0) {
            const lastItem = this.list.length - 1;
            this.lastRemoved = this.list[lastItem];
            return this.lastRemoved;
        }
        else return this.lastRemoved;
    }
};