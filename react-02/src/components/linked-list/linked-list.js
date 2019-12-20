export class ListNode {

    constructor(subject, amount) {
        this.subject = subject;
        this.amount = Number(amount);
        this.next = null;
        this.prev = null;
    }

    show() { 
        return `The current item's subject is ${this.subject} and amount is ${this.amount}.`
    }
};

export class LinkedList {

    // --- Chose Double-LinkedList --- 
    // Did so as it seemed to make more sense, given the need to easily navigate forward and backwards through list items. Also to try and learn more about LinkedLists in general.

    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    insertListNode(subject, amount) { 
        let newListNode = new ListNode(subject, amount);
        if (!this.current) {
            this.head = newListNode;
            this.tail = newListNode;
            this.current = newListNode;
            return newListNode;
        }
        else {
            let newNext = this.current.next;
            let newPrev = this.current;
            if (this.current === this.tail) {
                this.current.next = newListNode;
                newListNode.prev = newPrev;
                this.tail = newListNode;
                this.current = newListNode;
                newListNode.next = null;
                return newListNode;
            }
            else {
                this.current.next = newListNode;
                newListNode.prev = newPrev;
                newListNode.next = newNext;
                newNext.prev = newListNode;
                this.current = newListNode;
                return newListNode;
            }
        }
    }

    // --- New current is the prev listNode --- 
    // Inserting new nodes is based on the current node, as new nodes come after the current node. So it seemed to make the most sense to move in the opposite direction when nodes are deleted, and make the new current node the deleted node.prev.
    // The only exception being if there are only two nodes and this.head is deleted, in which case the current node becomes this.tail (the only remaining node). 

    deleteListNode(node) {
        if (!node) {
            return null
        }
        else {
            let newNext = node.next;
            let newPrev = node.prev;
            if (node === this.head && node === this.tail) {
                this.head = null;
                this.tail = null;
                this.current = null;
                node = null;
                return "";
            }
            if (node === this.head) {
                this.head = newNext;
                this.head.prev = null;
                this.current = this.head;
                node = null;
                return this.head;
            }
            if (node === this.tail) {
                this.tail = newPrev;
                this.tail.next = null;
                this.current = this.tail;
                node = null;
                return this.tail;
            }
            else {
                let newCurrentNode = newPrev;
                newCurrentNode.next = newNext;
                newNext.prev = newCurrentNode;
                this.current = newCurrentNode;
                node = null;
                return newCurrentNode;
            }
        }
    }

    firstNode() {
        if (!this.head) {
            return null;
        }
        this.current = this.head;
        return this.head;
    }

    lastNode() {
        if (!this.tail) {
            return null;
        }
        this.current = this.tail;
        return this.tail;
    }

    nextNode(node) {
        if (!node) {
            return null;
        }
        else if (!node.next) {
            this.current = node;
            return node;
        }
        else {
            let nextNode = node.next;
            this.current = nextNode;
            return nextNode;
        }
    }

    prevNode(node) {
        if (!node) {
            return null;
        }
        else if (!node.prev) {
            this.current = node;
            return node;
        }
        else {
            let prevNode = node.prev;
            this.current = prevNode;
            return prevNode;
        }
    }

    totalAmounts() {
        if (!this.head) {
            return 0;
        }
        else {
            let currentNode = this.head;
            let totalNumber = 0;
            while (currentNode) {
                totalNumber += currentNode.amount;
                currentNode = currentNode.next;
            }
            return totalNumber;
        }
    }
};