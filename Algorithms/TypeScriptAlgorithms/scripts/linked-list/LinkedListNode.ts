export default class LinkedListNode {
    public readonly value: string | number;
    next: LinkedListNode;
    constructor(value: string | number, next: LinkedListNode = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback: any){
        return callback ? callback(this.value) : `${this.value}`;
    }
}
