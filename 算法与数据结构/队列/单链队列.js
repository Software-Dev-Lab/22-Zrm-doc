/**
 * @description 单链队列
 * */
class Queue {
    constructor() {
        this.queue = []
    }
    enQueue(item) {
        this.queue.push(item)
    }
    deQueue() {
        this.queue.shift()
    }
    getHeader() {
        return this.queue[0]
    }
    getCount() {
        return this.queue.length
    }
    isEmpty() {
        return this.getCount() === 0
    }
}