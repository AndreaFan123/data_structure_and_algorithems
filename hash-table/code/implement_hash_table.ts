class HashTable {
  size: number;
  table: any[];
  constructor(size: number) {
    this.size = size;
    this.table = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);
    }
  }
  hashWithDivision(key: number) {
    return key % this.size;
  }

  hashWithMultiplication(key: number) {
    let A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((key * A) % 1));
  }

  set(key: number, value: any) {
    let index = this.hashWithDivision(key);
    this.table[index].push({ key, value });
  }

  get(key) {
    let index = this.hashWithMultiplication(key);
    // In order to avoid collision, we need to loop thr them
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i];
      }
    }
  }

  printAll() {
    console.log(this.table);
  }
}

let hashTable_1 = new HashTable(6);
hashTable_1.set(1134, "One"); // 1134 % 6 = 0
hashTable_1.set(6524, "Two"); // 6524 % 6 = 4
hashTable_1.set(4172, "Three"); // 4172 % 6 = 2
hashTable_1.set(4520, "Four"); // 4520 % 6 = 4
hashTable_1.set(6718, "Five"); // 6718 % 6 = 2
hashTable_1.set(9083, "Six"); // 9083 % 6 = 5

hashTable_1.printAll();

console.log(hashTable_1.get(1134)); // { key: 1134, value: 'One' }

/**
 * [
 * index 0 [ { key: 1134, value: 'One' } ],
 * index 1 [],
 * index 2 [ { key: 4172, value: 'Three' }, { key: 6718, value: 'Five' } ],
 * index 3 [],
 * index 4 [ { key: 6524, value: 'Two' }, { key: 4520, value: 'Four' } ],
 * index 5 [ { key: 9083, value: 'Six' } ]
 * ]
 */
