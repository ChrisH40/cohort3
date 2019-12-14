import { ListNode, LinkedList } from './linked-list.js';

test('test ListNode show', () => {
    const testListNode = new ListNode("Test Node", 1);
    expect(testListNode.show()).
        toBe("The subject is Test Node and the amount is 1.");
});

test('test LinkedList insertListNodeHead', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.insertListNodeHead("Test Node", 1)).
        toEqual({"head": {"amount": 1, "next": null, "prev": null, "subject": "Test Node"}, "length": 1, 
        "tail": {"amount": 1, "next": null, "prev": null, "subject": "Test Node"}});
});

test('test LinkedList displayNode', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertListNodeHead("Test Node", 1);
    expect(testLinkedList.displayNode()).
        toEqual("| Subject: Test Node, Amount: 1 |");
    testLinkedList.insertListNodeHead("Test Node Two", 2);
    expect(testLinkedList.displayNode()).
        toEqual("| Subject: Test Node Two, Amount: 2 || Subject: Test Node, Amount: 1 |");
});

// test('test LinkedList totalAmounts', () => {
//     
// });