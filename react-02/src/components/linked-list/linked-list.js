export class ListNode {

    constructor(subject, amount) {
        this.subject = subject;
        this.amount = Number(amount);
        this.next = null;
        this.prev = null;
    }

    // delete() {
    // --- likely will go in the node itself ---
    // }

    show() {
        return `The subject is ${this.subject} and the amount is ${this.amount}.`
    }
};

export class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertListNodeHead(subject, amount) { // --- Insert at start for now ---
        const newListNode = new ListNode(subject, amount);
        if (!this.head) {
            this.head = newListNode;
            this.tail = newListNode;
            this.length++;
            return this;
        }
        else {
            newListNode.next = this.head;
            this.head.prev = newListNode;
            this.head = newListNode;
            let findTail = this.head;
            while (findTail.next !== null) {
                findTail = findTail.next;
                this.tail = findTail;
            }
            this.length++;
            return this;
        }
    }

    // totalAmounts() {
    //     
    // }
};