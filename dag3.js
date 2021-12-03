// Part 1
data=document.body.innerText.trim().split("\n").map(r=>r.split(''))
g=parseInt(Array(12).fill(0).map((d,i)=>data.filter(r=>r[i]=='1').length>data.length/2?1:0).join(''),2)
e=parseInt(Array(12).fill(0).map((d,i)=>data.filter(r=>r[i]=='1').length>data.length/2?0:1).join(''),2)
g*e

// Part 2
for(i=0;data.length>1&&i<12;i++){data=data.filter(r=>r[i]==data.filter(r=>r[i]=='1').length>=data.length/2?1:0)}
o=parseInt(data[0].join(''),2)
data=document.body.innerText.trim().split("\n").map(r=>r.split(''))
for(i=0;data.length>1&&i<12;i++){data=data.filter(r=>r[i]==data.filter(r=>r[i]=='1').length>=data.length/2?0:1)}
c=parseInt(data[0].join(''),2)
o*c
