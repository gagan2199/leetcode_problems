
document.body.innerText="3rd problem";

function ss(s) {

    let count=0,ans=0,k=0;
    for(let i=0;i<s.length;i++)
    {
        let j=i+1;
           while (s[i]!=s[j]  && j<(s.length))
           {
               if(s[i]!=s[j])
               {
                   if(s[j]!=s[j+1])
                   count=count+1;
                   if (count>ans)
                   {
                       ans=count;
                   }
               }
               
              
               j++;
           }
               count=0;
           
    }
    return ans;
};

let  s = "abcabcbb";
let h=ss(s);

console.log(h);