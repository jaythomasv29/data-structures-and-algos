// compare two valuse to check if they are equal

function deepEquals(value1, value2) {
  // handle objects

  // handle primitive types
  if (typeof value1 !== "object" && typeof value2 != "object") {
    return value1 === value2;
  } else {
    const value2Keys = Object.keys(value2);
    const value1Keys = Object.keys(value1);
    if (value2Keys.length !== value1Keys.length) return false;
    // check if keys and values are equal
    for (const key in value1) {
      if (!value2Keys.includes(key)) return false; // if they do not have the same keys
      if (value1[key] !== value2[key]) return false; // if they do not have the same values at given key
    }
    return true;
  }
}

console.log(deepEquals("apple", "apple")); // true
console.log(deepEquals("apple", "banana")); // false
console.log(deepEquals(1, 2)); // false
console.log(deepEquals({ a: "elephant" }, { a: "elephant" })); // true
console.log(deepEquals({ z: 1 }, { z: 11 })); // false
console.log(
  deepEquals({ b: "mouse", a: "elephant" }, { a: "elephant", b: "mouse" })
); // true

console.log(
  deepEquals({ b: "mouse", a: "elephant" }, { a: "elephant", b: "mouse" })
); // true

console.log(deepEquals(["a", "b", "c"], ["a", "b", "c"])); // true
