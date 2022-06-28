const intersection = (a, b) => {
  // todo
  const setB = new Set(b);
  const intersection = new Set([...a].filter((x) => {
    return setB.has(x);
  }));
  return([...intersection])
};


console.log(intersection([4,2,1,6], [3,6,9,2,10]))
console.log(intersection([2,4,6], [4,2])) // -> [2,4]
console.log(intersection([4,2,1], [1,2,4,6])) // -> [1,2,4]
console.log(intersection([0,1,2], [10,11])) // -> []
