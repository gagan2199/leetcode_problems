
function plusOne(digits) {
    var len =  digits.length;
       var num;
       var add = 1;

       for(let i = len-1;i>=0;i--)
       {
           num = digits[i]+add;
           if(num == 10)
           {
               digits[i] = 0;
           }
           else
           {
               digits[i] = num;
               return digits;
           }
       }

       digits.unshift(1);
       console.log(digits);
       return digits;
};

let digits=[];
let n=prompt("enter the number of members");
for(let i=0;i<n;i++)
{
    digits[i]=prompt("enter the value of member of array");
}

console.log(digits);

let ans=plusOne(digits);


console.log(ans);