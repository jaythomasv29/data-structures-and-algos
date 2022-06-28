var isSubsequence2 = function (s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length && i < s.length) {
    if (s[i] === t[i]) {
      i++;
    }
    j++;
  }
};

function isSubsequence(s, t) {
  let sIdx = 0;
  let tIdx = 0;
  while(sIdx < s.length && tIdx < t.length) {
    if(s[sIdx] === t[tIdx]) {
      sIdx++
    }
    tIdx++
  }
  return sIdx === s.length ? true : false
}
console.log(isSubsequence("ab", "baab"));
