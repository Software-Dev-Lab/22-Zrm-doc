/**
 * @description 循环队列: 因为单链队列在出队操作的时候需要 O(n) 的时间复杂度，所以引入了循环队列。循环队列的出队操作平均是 O(1) 的时间复杂度。
 * */
class SqQueue {
    constructor(length) {
        this.queue = new Array(length + 1)
        // 队头
        this.first = 0
        // 队尾
        this.last = 0
        // 队列长度
        this.size = 0
    }
    /**
     * 入队
    */
   enQueue() {
   }
    /**
     * 出队
     * */
    deQueue() {

    }    
    /**
     * 查看队头
     * */ 
    getFront() {}
    /**
     * 队列长度
     * */ 
    getLength() {
        return this.queue.length - 1
    }
    /**
     * 判断队列是否为空
     * */ 
    isEmpty() {}
    /**
     * 队列扩容
     * */
    resize() {}
}

const test = new SqQueue(5)
console.log(test.getLength())