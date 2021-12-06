// Part 1
s=document.body.innerText.trim().split("\n\n").splice(1).map(b=>b.split('\n').map(r=>(" "+r).match(/(.{3})/g).map(n=>n.trim()))).map(b=>b.concat(b[0].map((_,i)=>[b[0][i],b[1][i],b[2][i],b[3][i],b[4][i]])))
n=document.body.innerText.trim().split("\n\n")[0].split(',')
x=-1
for (i=0;i<100&&x<0;i++) x=s.findIndex(b=>b.some(r=>r.every(v=>n.slice(0,i).includes(v))))
s[x].slice(0,5).flat().filter(v=>!n.slice(0,i-1).includes(v)).reduce((t,v)=>1*v+t,0)*n[i-2]

// Part 2
x=s
for (i=0;i<100&&x.length;i++) {
    x=s.filter(b=>!b.some(r=>r.every(v=>n.slice(0,i).includes(v))))
    if (x.length==1) l=x[0]
}
l.slice(0,5).flat().filter(v=>!n.slice(0,i-1).includes(v)).reduce((t,v)=>1*v+t,0)*n[i-2]

