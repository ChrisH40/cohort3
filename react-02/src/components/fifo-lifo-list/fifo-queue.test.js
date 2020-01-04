import { FifoQueue } from './fifo-queue.js';

test('test remove', () => {
    const testQueue = new FifoQueue();
    expect(testQueue.list)
        .toEqual(["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa"]);
    expect(testQueue.remove()).toEqual("Reno");
    expect(testQueue.list)
        .toEqual(["Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa"]);
});

test('test nextToRemove', () => {
    const testQueue = new FifoQueue();
    expect(testQueue.nextToRemove()).toBe("Reno");
});