import LinkedList from "../linked-list/LinkedList";

export default class Stack {
    private linkedList: LinkedList;
    constructor() {
        // We're going to implement Stack based on LinkedList since these
        // structures are quite similar. Compare push/pop operations of the Stack
        // with prepend/deleteHead operations of LinkedList.
        this.linkedList = new LinkedList();
    }

    /**
     * The stack is empty if its linked list doesn't have a head.
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (this.isEmpty()) {
            // If the linked list is empty then there is nothing to peek from.0
            return null;
        }

        // Just read the value from the start of linked list without deleting it.
        return this.linkedList.head.value;
    }

    /**
     * Pushing means to lay the value on top of the stack. Therefore let's just add
     * the new value at the start of the linked list.
     * @param value
     */
    push(value: string | number){
        this.linkedList.prepend(value);
    }

    /**
     * Let's try to delete the first node (the head) from the linked list.
     * If there is no head (the linked list is empty) just return null.
     */
    pop() {
        const removeHead = this.linkedList.deleteHead();
        return removeHead ? removeHead.value : null;
    }

    toArray() {
        return this.linkedList.toArray()
            .map((item) => item.value);
    }

    toString(callback: any) {
        return this.linkedList.toString(callback)
    }
}
