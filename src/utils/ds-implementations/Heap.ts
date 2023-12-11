type CompareFunction<T> = (a: T, b: T) => number;

export class Heap<T> {
    private items: T[] = [];
    private compare: CompareFunction<T>;

    constructor(compareFunction: CompareFunction<T>) {
        this.compare = compareFunction;
    }

    private heapifyDown(index: number): void {
        let maxIndex: number = index;
        const left: number = this.leftChildIndex(index);

        if (left <= this.items.length && this.items[left] > this.items[maxIndex]) {
            maxIndex = left;
        }

        const right: number = this.rightChildIndex(index);
        if (right <= this.items.length && this.items[right] > this.items[maxIndex]) {
            maxIndex = right;
        }

        if (index !== maxIndex) {
            this.swap(index,maxIndex);
            this.heapifyDown(maxIndex);
        }
    }

    private heapifyUp(): void {
        let index = this.items.length - 1;
        while (this.parentIndex(index) >= 0 && this.compareParentChild(this.parentIndex(index), index)) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }

    private swap(indexOne: number, indexTwo: number): void {
        [this.items[indexOne], this.items[indexTwo]] = [this.items[indexTwo], this.items[indexOne]];
    }

    private compareParentChild(parentIndex: number, childIndex: number): boolean {
        return this.compare(this.items[parentIndex], this.items[childIndex]) < 0;
    }

    public insert(item: T): void {
        this.items.push(item);
        this.heapifyUp();
    }

    public size(): number {
        return this.items.length;
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    public peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    public extractMax(): T | undefined {
        if (this.items.length === 0) {
            return undefined;
        }

        if (this.items.length === 1) {
            return this.items.pop();
        }

        const root = this.items[0];
        this.items[0] = this.items.pop()!;
        this.heapifyDown(0);
        return root;
    }

    private leftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    private rightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }

    private parentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    public printHeap(): void {
        for (let i = 0; i <= this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}