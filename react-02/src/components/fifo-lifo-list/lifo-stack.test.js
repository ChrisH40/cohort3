import { LifoStack } from './lifo-stack.js';

test('test remove', () => {
    const testStack = new LifoStack();
    expect(testStack.list)
        .toEqual(["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa"]);
    expect(testStack.remove()).toEqual("Tulsa");
    expect(testStack.list)
        .toEqual(["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita"]);
});

test('test nextToRemove', () => {
    const testStack = new LifoStack();
    testStack.list = ["Wichita", "Tulsa"];
    expect(testStack.nextToRemove()).toBe("Tulsa");
    testStack.remove();
    expect(testStack.nextToRemove()).toBe("Wichita");
    testStack.remove();
    expect(testStack.nextToRemove()).toBe("Wichita");
});