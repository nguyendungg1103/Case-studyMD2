export class Student {
    id: number;
    name: string;
    address: string;
    constructor(id: any, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getId() { return this.id; }
    getName(): string { return this.name; }
    getAddress(): string { return this.address; }



}