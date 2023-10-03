function trc(s, k) {
    let t=s.trim();
    let s2= t.split(" ");
    let ans1=[];
    for(let i=0;i<k;i++)
    {
        ans1.push(s2[i]);
    }
    let ans2=ans1.join(" ");
   
    return ans2;

};

s = "Hello how are you Contestant", k = 4;

let ans=trc(s,k);
console.log(ans);