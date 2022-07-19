// hashtable is one of most usefull data structure because of it takes constant time for lookup, insertion , Deletion and searching.
// It takes O(1) time.
// Each programing language has their own built in hash table
// A chunk of memory provided for hashtable by system and because of this hash collision occurs and it forms an hash chain.
// Due to hashchain , time complexity becomes O(n).

// implement hashtable using array in Javascript

class myHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hashKey(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index) * index) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hashKey(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hashKey(key);
    const currentBucket = this.data[address];
    for (let index = 0; index < currentBucket.length; index++) {
      if (currentBucket[index][0] === key) {
        return currentBucket[index][1];
      }
    }
    return undefined;
  }
}

const hashMap = new myHashTable(2);

hashMap.set("Nick", 0935093058);
hashMap.set("Matt", 43508320);
hashMap.set("Raan", 6249008);

console.log(hashMap.data);

console.log(hashMap.get("Raan"));
