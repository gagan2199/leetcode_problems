function lol(s) {
    let l = (s.length) - 1;
    let count = 0;
    let count2 = 0;

    if (s[l] == " ") {

        for (let i = l; i >= 0; i--) {
            count2++;
            if (s[i] != " ") {
                i = 0;
            }
        }
        console.log("cout2 = " + (count2 - 1));
        l = l - 2;
    }

    if (s[l] != " ") {
        for (let i = l; i > 0; i--) {
            count = count + 1;
            if (s[i] == " ") {
                i = 0;
            }

        }
        return count - 1;
    }

};

let s = "my name is gagankumar  ";

let s2 = "abcdefgh";
let ct1 = lol(s2);
let ct = lol(s);

console.log(ct);
console.log(ct1);



console.log("second method");

function lol2(str)
{
    let l= (str.length)-1;

    let str1=str.trim();                 // will remove all extra spaces

    let arr= str1.split(" ");             //will return new array

    return arr[(arr.length)-1].length;


}

let ct3 = lol2(s2);
let ct4 = lol2(s);

console.log(ct3 +" , "+ct4)