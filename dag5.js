// Part 1
h=[]
h2=[]
check=c=>{
    if (h[c]&&!h2[c]) h2[c]=1
    h[c]=1
}
document.body.innerText.trim().split("\n").map(r=>r.split(' -> ').map(p=>p.split(',').map(v=>1*v))).filter(r=>r[0][0]==r[1][0]||r[0][1]==r[1][1]).forEach(r=>{
    dx=r[1][0]-r[0][0]
    dy=r[1][1]-r[0][1]
    xs=dx&&dx/Math.abs(dx)
    ys=dy&&dy/Math.abs(dy)
    for (x=0;x!=dx;x+=xs) check((r[0][0]+x)+','+r[0][1])
    for (y=0;y!=dy;y+=ys) check(r[0][0]+','+(r[0][1]+y))
    check(r[1][0]+','+r[1][1])    
})
Object.keys(h2).length

// Part 2
h=[]
h2=[]
check=c=>{
    if (h[c]&&!h2[c]) h2[c]=1
    h[c]=1
}
document.body.innerText.trim().split("\n").map(r=>r.split(' -> ').map(p=>p.split(',').map(v=>1*v))).forEach(r=>{
    dx=r[1][0]-r[0][0]
    dy=r[1][1]-r[0][1]
    xs=dx&&dx/Math.abs(dx)
    ys=dy&&dy/Math.abs(dy)
    x=y=0
    while (x!=dx||y!=dy) {
	check((r[0][0]+x)+','+(r[0][1]+y))
	x+=xs
	y+=ys
    }
    check(r[1][0]+','+r[1][1])
})
Object.keys(h2).length
