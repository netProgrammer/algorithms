import LinkedList from "../linked-list/LinkedList";
import {IHash} from "../linked-list/LinkedListNode";

export default class Queue {
    private linkedList: LinkedList;
    constructor() {
        // We're going to implement Queue based on LinkedList since the two
        // structures are quite similar. Namely, they both operate mostly on
        // the elements at the beginning and the end. Compare enqueue/dequeue
        // operations of Queue with append/deleteHead operations of LinkedList.
        this.linkedList = new LinkedList();
    }

    isEmpty(){
        return !this.linkedList.head;
    }

    peek(){
        if (this.isEmpty()){
            return null;
        }
        return this.linkedList.head.value;
    }

    /**
     * Add a new element to the end of the queue (the tail of the linked list).
     * This element will be processed after all elements ahead of it.
     * @param value
     */
    enqueue(value: string | number | IHash) {
        this.linkedList.append(value);
    }

    /**
     * Remove the element at the front of the queue (the head of the linked list).
     * If the queue is empty, return null.
     */
    dequeue(){
        const  removeHead = this.linkedList.deleteHead();
        return removeHead ? removeHead.value : null;
    }

    /**
     * Return string representation of the queue's linked list
     * @param callback
     */
    toString(callback: any): string{
        return this.linkedList.toString(callback);
    }
}
