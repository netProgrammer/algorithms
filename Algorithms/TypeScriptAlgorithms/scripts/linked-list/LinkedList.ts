import {IHash, LinkedListNode} from "./LinkedListNode";
import {Comparator, ICompareFunction} from "../utils/Comparator";

export default class LinkedList {
    public head: LinkedListNode;
    public tail: LinkedListNode;
    private compare: Comparator;

    /**
     * Constructor
     * @param comparatorFunction
     */
    constructor(comparatorFunction: ICompareFunction = null) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * Add new list element
     * @param value
     */
    prepend(value: string | number | IHash): LinkedList {
        // Make new node to be a head
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        //If there is no tail yet let's make new node a tail.
        if (!this.tail){
            this.tail = newNode;
        }
        return this;
    }

    append(value: string | number | IHash): LinkedList {
        const newNode = new LinkedListNode(value);

        // If there is no head yet let's make new node a head.
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    delete(value: string | number | IHash): LinkedListNode {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;

        // If the head must be deleted then make next node that is different
        // from the head to be a new head.
        while (this.head && this.compare.equal(this.head.value, value)) {
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            // If next node must be  deleted then make next node to be a next node.
            while (currentNode.next){
                if (this.compare.equal(currentNode.next.value, value)){
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        // Check if tail must be deleted.
        if(this.compare.equal(this.tail.value, value)){
            this.tail = currentNode;
        }

        return deleteNode;
    }

    find({ value = undefined, callback = undefined }: any): LinkedListNode | null {
        if(!this.head){
            return null;
        }

        let currentNode = this.head;

        while (currentNode){
            // If callback is specified then try to find node by callback.
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            // If value is specified then try to compare by value.
            if (value !== undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
        return null;
    }

    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            // There is only one node in linked list.
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        // If there are many nodes in linked list ...
        // Rewind to the last node and delete "next" link for the node before the last one.
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;
        return deletedTail;
    }

    deleteHead() {
        if(!this.head) {
            return null;
        }

        const deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    fromArray(values: string[] | number[]){
        values.forEach((value: string | number | IHash) => this.append(value));
        return this;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode){
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString(callback: any) {
        return this.toArray().map((node) => node.toString(callback)).toString();
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            // Store next node.
            nextNode = currNode.next;

            // Change next node of the current node so it would link to previous node.
            currNode.next = prevNode;

            // Move prevNode and currNode nodes one step forward.
            prevNode = currNode;
            currNode = nextNode;
        }

        // Reset head and tail.
        this.tail = this.head;
        this.head = prevNode;

        return this
    }
}
