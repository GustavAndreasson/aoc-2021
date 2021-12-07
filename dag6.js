// Part 1
f=document.body.innerText.trim().split(",").map(n=>1*n)
for (i=0;i<80;i++) {
    a=0
    f=f.map(v=>v>0?v-1:++a&&6).concat(Array(a).fill(8))
}
f.length

// Part 2
t=Array(9).fill(0)
document.body.innerText.trim().split(",").forEach(v=>t[v]=t[v]?t[v]+1:1)
for (i=0;i<80;i++) {
    z=t[0]
    for(j=1;j<9;j++) t[j-1]=t[j]
    t[8]=z
    t[6]+=z
}
t.reduce((s,v)=>s+v)
