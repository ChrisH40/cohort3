
// --- Subject to Change ---

export class ListNode {

    constructor(forwardNode, previousNode, subject, amount) {
        this.forwardNode = forwardNode;
        this.previousNode = previousNode;
        this.subject = subject;
        this.amount = Number(amount);
    }

    show() {
        return `The subject is ${this.subject} and the amount is ${this.amount}.`
    }
};

export class LinkedList {

    constructor(listName) {
        this.listName = listName;
        this.listArray = []; // might not use now?
        this.counter = 0; // might not use now?
    }

    createListNode(forwardNode, previousNode, subject, amount) {
        this.counter++;
        const newListNode = new ListNode (forwardNode, previousNode, subject, amount);
        this.listArray.push(newListNode); // might not use now, if no array used?
        return newListNode;
    }

    totalAmounts(array) {
        const arrayAmounts = array.map(listNode => listNode.amount); // might not use now, if no array used?
        const totalAmounts = arrayAmounts.reduce((sum, num) => sum + num); 
        return totalAmounts;
    }
};