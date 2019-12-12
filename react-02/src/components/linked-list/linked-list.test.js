
// --- Subject to Change ---

import { ListNode, LinkedList } from './linked-list.js';

test('test ListNode show', () => {
    const testListNode = new ListNode("Test Forward Node", "Test Previous Node", "Test Node", 1);
    expect(testListNode.show()).
        toBe("The subject is Test Node and the amount is 1.");
});

test('test LinkedList createListNode', () => {
    const testLinkedList = new LinkedList("Test LinkedList");
    expect(testLinkedList.createListNode("Test Forward Node", "Test Previous Node", "Test Node", 1)).
        toEqual({"amount": 1, "forwardNode": "Test Forward Node", "previousNode": "Test Previous Node", "subject": "Test Node"});
});

test('test LinkedList totalAmounts', () => {
    const testLinkedList = new LinkedList("Test LinkedList");
    testLinkedList.createListNode("Test Forward Node 1", "Test Previous Node 1", "Test Node 1", 1);
    testLinkedList.createListNode("Test Forward Node 2", "Test Previous Node 2", "Test Node 2", 10);
    testLinkedList.createListNode("Test Forward Node 3", "Test Previous Node 3", "Test Node 3", 18);
    expect(testLinkedList.totalAmounts(testLinkedList.listArray)).toEqual(29);
});