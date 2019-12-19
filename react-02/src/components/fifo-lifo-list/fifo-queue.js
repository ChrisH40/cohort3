export class FifoQueue {

    constructor() {
        this.list =
            ["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa"];
    }

    add(item) {
        this.list.push(item);
        return item;
    }

    remove() {
        const removedItem = this.list.shift();
        return removedItem;
    }

    nextToRemove() {
        return this.list[0];
    }

};