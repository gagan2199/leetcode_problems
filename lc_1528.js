function shufflestring(s, indices) {
    let newString = [];
  for (let i = 0; i < indices.length; i++) {
    newString[indices[i]] = s[i];
  }
  return newString.join("");

};

s = "codeleet", indices = [4,5,6,7,0,2,1,3];

let ans=shufflestring(s,indices);
console.log(ans);