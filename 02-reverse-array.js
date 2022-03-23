// Create a function that reverses a string:
//'Hi my name is James.'
//'!semaJ si eman ym iH'

function reverse(str) {
  //check input, edge case
  if (!str || str.length < 2 || typeof str !== "string") return "error";
  // have a result string
  let result = "";
  //loop through string and from end to front and concat result string
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  // return the result string
  return result;
}

console.log(reverse("Hi my name is James."));
