import { LifoStack } from './lifo-stack.js';

test('test add remove', () => {
    const testStack = new LifoStack();
    expect(testStack.add("Calgary")).toBe("Calgary");
    expect(testStack.list)
        .toEqual(["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa", "Calgary"]);
    expect(testStack.remove()).toEqual("Calgary");
    expect(testStack.list)
        .toEqual(["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa"]);
});

test('test nextToRemove', () => {
    const testStack = new LifoStack();
    expect(testStack.nextToRemove()).toBe("Tulsa");
});