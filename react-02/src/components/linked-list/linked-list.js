
// --- Subject to Change ---

export class ListNode {

    constructor(subject, amount) {
        this.subject = subject;
        this.amount = Number(amount);
        this.next = null;
    }

    show() {
        return `The subject is ${this.subject} and the amount is ${this.amount}.`
    }
};

export class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertListNodeHead(subject, amount) {
        const newListNode = new ListNode(subject, amount);
        if (this.head === null) {
            this.head = newListNode;
            this.length++;
            return this;
        }
        else {
            newListNode.next = this.head;
            this.head = newListNode
            this.length++;
            return this;
        }
    }

    // totalAmounts() {
    //     
    // }
};