
// --- subject to change ---

export class ListNode {

    constructor(key, forwardNode, subject, amount) {
        this.key = Number(key) // might not use now?
        this.forwardNode = forwardNode;
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

    createListNode(forwardNode, subject, amount) {
        this.counter++;
        const newListNode = new ListNode (this.counter, forwardNode, subject, amount);
        return newListNode;
    }

    total() {
        //total amounts of all ListNodes... might not go here?
    }
};