import { ListNode, LinkedList } from './linked-list.js';

test('test ListNode show', () => {
    const testListNode = new ListNode("Test Node", 1);
    expect(testListNode.show()).
        toBe("The current item's subject is Test Node and amount is 1.");
});

test('test LinkedList insertListNode', () => {
    const testLinkedList = new LinkedList();
    const testNodeOne = testLinkedList.insertListNode("Test Node One", 1);
    expect(testNodeOne).toBe(testLinkedList.head);
    expect(testNodeOne).toBe(testLinkedList.tail);
    expect(testNodeOne).toBe(testLinkedList.current);
    const testNodeTwo = testLinkedList.insertListNode("Test Node Two", 2);
    expect(testNodeTwo).toBe(testLinkedList.tail);
    expect(testNodeTwo).toBe(testLinkedList.current);
    expect(testNodeTwo.next).toBe(null);
    expect(testNodeTwo.prev).toBe(testNodeOne);
    const testNodeThree = testLinkedList.insertListNode("Test Node Three", 3);
    expect(testNodeThree).toBe(testLinkedList.tail);
    expect(testNodeThree).toBe(testLinkedList.current);  
    expect(testNodeThree.next).toBe(null);
    expect(testNodeThree.prev).toBe(testNodeTwo);
    testLinkedList.current = testNodeTwo;
    const testNodeFour = testLinkedList.insertListNode("Test Node Four", 4);
    expect(testNodeTwo.next).toBe(testNodeFour);
    expect(testNodeFour.prev).toBe(testNodeTwo);
    expect(testNodeFour.next).toBe(testNodeThree);
    expect(testNodeThree.prev).toBe(testNodeFour);
    expect(testLinkedList.current).toBe(testNodeFour);
});

test('test LinkedList deleteListNode', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.deleteListNode()).toBe(null);
    const testNodeOne = testLinkedList.insertListNode("Test Node One", 1);
    expect(testLinkedList.deleteListNode(testNodeOne)).toBe(null);
    const testNodeTwo = testLinkedList.insertListNode("Test Node Two", 2);
    const testNodeThree = testLinkedList.insertListNode("Test Node Three", 3);
    expect(testLinkedList.deleteListNode(testNodeTwo)).toBe(testNodeThree);
    expect(testNodeThree).toBe(testLinkedList.head);
    expect(testNodeThree).toBe(testLinkedList.tail);
    expect(testNodeThree).toBe(testLinkedList.current);
    expect(testNodeThree.next).toBe(null);
    expect(testNodeThree.prev).toBe(null);
    const testNodeFour = testLinkedList.insertListNode("Test Node Four", 4);
    expect(testLinkedList.deleteListNode(testNodeFour)).toBe(testNodeThree);
    expect(testNodeThree).toBe(testLinkedList.tail); 
    expect(testNodeThree).toBe(testLinkedList.head);
    expect(testNodeThree).toBe(testLinkedList.current);
    const testNodeFive = testLinkedList.insertListNode("Test Node Five", 5);
    const testNodeSix = testLinkedList.insertListNode("Test Node Six", 6);
    expect(testLinkedList.deleteListNode(testNodeFive)).toBe(testNodeThree);
});

test('test LinkedList firstNode prevNode nextNode lastNode', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.firstNode()).toBe(null);
    expect(testLinkedList.lastNode()).toBe(null);
    expect(testLinkedList.prevNode()).toBe(null);
    expect(testLinkedList.nextNode()).toBe(null);
    const testNodeOne = testLinkedList.insertListNode("Test Node One", 1);
    const testNodeTwo = testLinkedList.insertListNode("Test Node Two", 2);
    const testNodeThree = testLinkedList.insertListNode("Test Node Three", 3);
    expect(testLinkedList.firstNode()).toBe(testNodeOne);
    expect(testLinkedList.lastNode()).toBe(testNodeThree);
    expect(testLinkedList.prevNode(testNodeThree)).toBe(testNodeTwo);
    expect(testLinkedList.nextNode(testNodeTwo)).toBe(testNodeThree);
    expect(testLinkedList.prevNode(testNodeOne)).toBe(testNodeOne);
    expect(testLinkedList.nextNode(testNodeThree)).toBe(testNodeThree);
});

test('test LinkedList totalAmounts', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.totalAmounts()).toBe(0);
    const testNodeOne = testLinkedList.insertListNode("Test Node One", 1);
    expect(testLinkedList.totalAmounts()).toBe(1);
    const testNodeTwo = testLinkedList.insertListNode("Test Node Two", 10);
    expect(testLinkedList.totalAmounts()).toBe(11);
    testLinkedList.deleteListNode(testNodeOne);
    expect(testLinkedList.totalAmounts()).toBe(10);
});