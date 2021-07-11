export interface IHash {
    key: string,
    value: string | number
}

export class LinkedListNode {
    public readonly value: string | number | IHash;
    next: LinkedListNode;
    constructor(value: string | number | IHash, next: LinkedListNode = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback: any){
        return callback ? callback(this.value) : `${this.value}`;
    }
}
