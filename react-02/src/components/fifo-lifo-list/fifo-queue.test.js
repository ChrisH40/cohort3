import { FifoQueue } from './fifo-queue.js';

test('test add remove', () => {
    const testQueue = new FifoQueue();
    expect(testQueue.add("Calgary")).toBe("Calgary");
    expect(testQueue.list)
        .toEqual(["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa", "Calgary"]);
    expect(testQueue.remove()).toEqual("Reno");
    expect(testQueue.list)
        .toEqual(["Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa", "Calgary"]);
});

test('test nextToRemove', () => {
    const testQueue = new FifoQueue();
    expect(testQueue.nextToRemove()).toBe("Reno");
});