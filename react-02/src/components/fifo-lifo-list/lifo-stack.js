export class LifoStack {

    constructor() {
        this.list =
            ["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa"];
    }

    add(item) {
        this.list.push(item);
        return item;
    }

    remove() {
        const removedItem = this.list.pop();
        return removedItem;
    }

    nextToRemove() {
        const lastItem = this.list.length - 1;
        return this.list[lastItem];
    }
};