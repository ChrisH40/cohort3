import { ListNode, LinkedList } from './linked-list.js';

test('test ListNode show', () => {
    const testListNode = new ListNode("Test Node", 1);
    expect(testListNode.show()).
        toBe("The current item's subject is Test Node and amount is 1.");
});

test('test LinkedList insertListNode', () => {
    const testLinkedList = new LinkedList();
    const testNodeOne = testLinkedList.insertListNode(null, "Test Node One", 1);
    expect(testNodeOne).toBe(testLinkedList.head);
    expect(testNodeOne).toBe(testLinkedList.tail);
    const testNodeTwo = testLinkedList.insertListNode(testNodeOne, "Test Node Two", 2);
    expect(testNodeTwo).toBe(testLinkedList.tail);
    expect(testNodeTwo.next).toBe(null);
    const testNodeThree = testLinkedList.insertListNode(testNodeTwo, "Test Node Three", 3);
    expect(testNodeThree).toBe(testLinkedList.tail);
    expect(testNodeThree.prev).toBe(testNodeTwo);
    const testNodeFour = testLinkedList.insertListNode(testNodeTwo, "Test Node Four", 4);
    expect(testNodeThree).toBe(testLinkedList.tail);
    expect(testNodeFour.prev).toBe(testNodeTwo);
    expect(testNodeFour.next).toBe(testNodeThree);
});

test('test LinkedList deleteListNode', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.deleteListNode(null)).toBe(null);
    const testNodeOne = testLinkedList.insertListNode(null, "Test Node One", 1);
    expect(testLinkedList.deleteListNode(testNodeOne)).toBe("");
    const testNodeTwo = testLinkedList.insertListNode(null, "Test Node Two", 2);
    const testNodeThree = testLinkedList.insertListNode(testNodeTwo, "Test Node Three", 3);
    expect(testLinkedList.deleteListNode(testNodeTwo)).toBe(testNodeThree);
    expect(testNodeThree).toBe(testLinkedList.head);
    const testNodeFour = testLinkedList.insertListNode(testNodeThree, "Test Node Four", 4);
    expect(testLinkedList.deleteListNode(testNodeFour)).toBe(testNodeThree);
    expect(testNodeThree).toBe(testLinkedList.tail); 
    expect(testNodeThree).toBe(testLinkedList.head);
    const testNodeFive = testLinkedList.insertListNode(testNodeThree, "Test Node Five", 5);
    const testNodeSix = testLinkedList.insertListNode(testNodeFive, "Test Node Six", 6);
    expect(testLinkedList.deleteListNode(testNodeFive)).toBe(testNodeThree);
});

test('test LinkedList firstNode prevNode nextNode lastNode', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.firstNode()).toBe(null);
    expect(testLinkedList.lastNode()).toBe(null);
    expect(testLinkedList.prevNode(null)).toBe(null);
    expect(testLinkedList.nextNode(null)).toBe(null);
    const testNodeOne = testLinkedList.insertListNode(null, "Test Node One", 1);
    const testNodeTwo = testLinkedList.insertListNode(testNodeOne, "Test Node Two", 2);
    const testNodeThree = testLinkedList.insertListNode(testNodeTwo, "Test Node Three", 3);
    const firstNodeTest = testLinkedList.firstNode();
    expect(firstNodeTest).toBe(testNodeOne);
    const lastNodeTest = testLinkedList.lastNode();
    expect(lastNodeTest).toBe(testNodeThree);
    const prevNodeTest = testLinkedList.prevNode(testNodeThree);
    expect(prevNodeTest).toBe(testNodeTwo);
    const nextNodeTest = testLinkedList.nextNode(testNodeTwo);
    expect(nextNodeTest).toBe(testNodeThree);
});

test('test LinkedList totalAmounts', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.totalAmounts()).toBe(0);
    const testNodeOne = testLinkedList.insertListNode(null, "Test Node One", 1);
    expect(testLinkedList.totalAmounts()).toBe(1);
    const testNodeTwo = testLinkedList.insertListNode(testNodeOne, "Test Node Two", 10);
    expect(testLinkedList.totalAmounts()).toBe(11);
    testLinkedList.deleteListNode(testNodeOne);
    expect(testLinkedList.totalAmounts()).toBe(10);
});