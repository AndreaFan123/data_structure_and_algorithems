class HashTableWithParseStringToInt {
  size: number;
  table: any[];
  constructor(size: number) {
    this.size = size;
    this.table = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);
    }
  }
  stringToHash(key: string) {
    let result = 0;
    for (let i = 0; i < key.length; i++) {
      result += key.charCodeAt(i) % this.size;
    }
    return result;
  }

  hashWithDivision(key: number | string) {
    let parsedKey = typeof key === "number" ? key : this.stringToHash(key);
    return parsedKey % this.size;
  }

  hashWithMultiplication(key: number | string) {
    const A = (Math.sqrt(5) - 1) / 2;
    let parsedKey = typeof key === "number" ? key : this.stringToHash(key);

    return Math.floor(this.size * ((parsedKey * A) % 1));
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
    return null;
  }

  printAll() {
    console.log(this.table);
  }
}
