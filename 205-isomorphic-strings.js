// foo, bar

var isIsomorphic = function (s, t) {
  const dictionary = {};
  for (let i = 0; i < s.length; i++) {
    const si = s.charAt(i);
    const ti = t.charAt(i);

    // prevents
    if (si in dictionary) {
      if (dictionary[si] != ti) return false; // if the key/value already exists and is not equal to same value as char
    } else {
      if (Object.values(dictionary).includes(ti)) return false;
      dictionary[si] = ti;
    }
  }
  return true;
};

// console.log(isIsomorphic('badc', 'baba'))

var isIsomorphic2 = function (s, t) {
  const sDict = {};
  const tDict = {};
  for (let i = 0; i < s.length; i++) {
    const sEle = s[i];
    const tEle = t[i];
    if (!Object.hasOwn(sDict, sEle)) sDict[sEle] = i;
    if (!Object.hasOwn(tDict, tEle)) tDict[tEle] = i;

    if (sDict[sEle] !== tDict[tEle]) return false;
  }
  return true;
};

console.log(isIsomorphic2("ab", "aa"));
