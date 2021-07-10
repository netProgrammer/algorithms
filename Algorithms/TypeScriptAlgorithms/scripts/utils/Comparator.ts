export default class Comparator {
    private compare: any;

    /**
     * Constructor
     * @param compareFunction - It may be custom compare function
     */
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    /**
     * Default comparison function. It just assumes that "a" and "b" are strings or number.
     * @param a
     * @param b
     */
    static defaultCompareFunction(a: string | number, b: string | number) : number {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    /**
     * Checks if two variables are equal
     * @param a
     * @param b
     */
    equal (a,b){
        return this.compare(a, b) === 0;
    }

    /**
     * Check if variable "a" is less than "b"
     * @param a
     * @param b
     */
    lessThan(a,b){
        return this.compare(a, b) < 0;
    }

    /**
     * Check if variable "a" is greater than "b"
     * @param a
     * @param b
     */
    greaterThan(a,b){
        return this.compare(a, b) > 0;
    }

    /**
     * Check if variable "a" is less than or equal to "b"
     * @param a
     * @param b
     */
    lessThanOrEqual(a,b){
        return this.lessThan(a, b) || this.equal(a, b);
    }

    /**
     * Check if variable "a" is greater than or equal to "b"
     * @param a
     * @param b
     */
    greaterThanOrEqual(a,b){
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    /**
     * Reverse the comparison order.
     */
    reverse(){
        const compareOriginal = this.compare;
        this.compare = (a,b) => compareOriginal(b,a);
    }
}
