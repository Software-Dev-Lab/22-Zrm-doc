const { get } = require("http");

/**
 * @description 循环队列: 因为单链队列在出队操作的时候需要 O(n) 的时间复杂度，所以引入了循环队列。循环队列的出队操作平均是 O(1) 的时间复杂度。
 * */
class SqQueue {
    constructor() {}
    /**
     * 入队
    */
   enQueue() {}
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
    getLength() {}
    /**
     * 判断队列是否为空
     * */ 
    isEmpty() {}
    /**
     * 队列扩容
     * */
    resize() {}
}