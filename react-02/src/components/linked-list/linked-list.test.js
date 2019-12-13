
// --- Subject to Change ---

import { ListNode, LinkedList } from './linked-list.js';

test('test ListNode show', () => {
    const testListNode = new ListNode("Test Node", 1);
    expect(testListNode.show()).
        toBe("The subject is Test Node and the amount is 1.");
});

test('test LinkedList insertListNodeHead', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.insertListNodeHead("Test Node", 1)).
        toEqual({"head": {"amount": 1, "next": null, "subject": "Test Node"}, "length": 1});
    expect(testLinkedList.insertListNodeHead("Test Node 2", 2)).
        toEqual({"head": {"amount": 2, "next": {"amount": 1, "next": null, "subject": "Test Node"}, "subject": "Test Node 2"}, "length": 2});
    expect(testLinkedList.insertListNodeHead("Test Node 3", 3)).
        toEqual({"head": {"amount": 3, "next": {"amount": 2, "next": {"amount": 1, "next": null, "subject": "Test Node"}, "subject": "Test Node 2"}, "subject": "Test Node 3"}, "length": 3});
});

// test('test LinkedList totalAmounts', () => {
//     
// });