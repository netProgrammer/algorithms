export default class LinkedListNode {
    private readonly value: number;
    private next: LinkedListNode;
    constructor(value: number, next: LinkedListNode = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback){
        return callback ? callback(this.value) : `${this.value}`;
    }
}
