// Part 1
r=99999999
for(p=0;p<2000;p++) r=Math.min(document.body.innerText.trim().split(",").map(n=>1*n).map(v=>Math.abs(p-v)).reduce((s,v)=>s+v), r)

// Part 2                                                                                                                                                         
r=99999999
cost=l=>(1+l)*l/2
for(p=0;p<2000;p++) r=Math.min(document.body.innerText.trim().split(",").map(n=>1*n).map(v=>cost(Math.abs(p-v))).reduce((s,v)=>s+v), r)
