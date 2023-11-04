console.log("hello")

// let body=document.getElementsByTagName('body');

document.body.innerText="Leet-code Problems";

// let a=[2,3,4];
// let b=[1,2,3];

let a = [9,9,9,9,9,9,9], b = [9,9,9,9];

let c,d,ans1="",ans2="";

for(let i=(a.length)-1;i>=0;i--)
{
    c=`${a[i]}`;
    ans1= ans1+c;

}
for(let j=(b.length)-1;j>=0;j--)
{
    d=`${b[j]}`;
    ans2= ans2+d;

}

let x= parseInt(ans1);
let y= parseInt(ans2);

let ans3=x+y;
let ans4=ans3.toString()
console.log(ans4);

let final_ans=[];
for(let k=(ans4.length)-1;k>=0;k--)
{
    e=`${ans4[k]}`;

    let p=parseInt(e);
    final_ans.push(p);

}
console.log(final_ans);









// console.log(ans1);
// console.log(ans2);

// console.log(x+y);
// let m=`${a[0]}${a[1]}${a[2]}`;
// let n=`${b[0]}${b[1]}${b[2]}`;

// let x= parseInt(m);
// let y= parseInt(n);

// result = x+y;
// console.log(m);
// console.log(n)
// console.log(typeof(m), typeof(n))
// console.log(typeof(x), typeof(y))
// console.log(result);
