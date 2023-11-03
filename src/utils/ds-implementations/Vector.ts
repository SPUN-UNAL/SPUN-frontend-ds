export class Vector<T> {
    private capacity: number;
    private topIndex: number;
    private data: T[];

    constructor(capacity: number = 0) {
        this.capacity = capacity;
        this.topIndex = 0;
        this.data = new Array<T>(this.capacity);
    }

    empty(): boolean {
        /*
            Returns a boolean indicating whether the vector is empty.
            Time complexity: O(1).
        */

        return this.topIndex === 0;
    }

    size(): number {
        /*
            Returns the number of elements in the vector.
            Time complexity: O(1).
        */

        return this.topIndex;
    }

    at(i: number): T {
        /*
            Returns the element at the specified index.
            Time complexity: O(1).
        */

        if (i < 0 || i >= this.size()) {
            throw new Error("Index out of bounds.");
        }
        return this.data[i];
    }

    assign(i: number, item: T): void {
        /* 
            Assigns a new value at the specified index.
            Time complexity: O(1).
        */

        if (i < 0 || i >= this.size()) {
            throw new Error("Index out of bounds.");
        }
        this.data[i] = item;
    }

    push_back(item: T): void {
        /*
            Adds an element to the end of the vector.
            Time complexity: Amortized O(1).
        */

        if (this.size() === this.capacity) {
            let newData = new Array<T>(this.capacity * 2);

            for (let i = 0; i < this.size(); i++) {
                newData[i] = this.data[i];
            }
            this.data = newData;
            this.capacity *= 2;
        }
        this.data[this.topIndex++] = item;
    }

    back(): T {
        /*
            Returns the element at the end of the vector.
            Time complexity: O(1).
        */

        if (this.empty()) {
            throw new Error("The vector is empty.");
        }
        return this.data[this.topIndex - 1];
    }

    pop_back(): void {
        /*
            Removes the element at the end of the vector.
            Time complexity: O(1).
        */

        if (this.empty()) {
            throw new Error("The vector is empty.");
        }
        this.topIndex--;
    }

    erase(i: number): void {
        /*
            Removes the element at the specified index.
            Time complexity: O(n).
        */

        if (i < 0 || i >= this.size()) {
            throw new Error("Index out of bounds.");
        }
        for (let j = i; j < this.size() - 1; j++) {
            this.data[j] = this.data[j + 1];
        }
        this.topIndex--;
    }

    findObject(objectToFind: T): boolean {
        for (let i = 0; i < this.size(); i++) {
            if (this.data[i] === objectToFind){
                return true;
            }
        }
        return false;
    }
}

export default Vector;