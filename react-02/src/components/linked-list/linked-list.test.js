
// --- subject to change ---

import { ListNode, LinkedList } from './linked-list.js';

test('test ListNode show', () => {
    const testListNode = new ListNode(1, "Test Forward Node", "Test Node", 1);
    expect(testListNode.show()).
        toBe("The subject is Test Node and the amount is 1.");
});

test('test LinkedList createListNode', () => {
    const testLinkedList = new LinkedList("Test LinkedList");
    expect(testLinkedList.createListNode("Test Forward Node", "Test Node", 1)).
        toEqual({"amount": 1, "forwardNode": "Test Forward Node", "key": 1, "subject": "Test Node"});
});