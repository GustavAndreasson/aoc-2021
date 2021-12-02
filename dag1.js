// Part 1
document.body.innerText.trim().split("\n").filter((r,i,a)=>!(i&&r<a[i-1])).length

// Part 2
document.body.innerText.trim().split("\n").map(r=>1*r).map((r,i,a)=>i>1?r+a[i-1]+a[i-2]:0).slice(2).filter((r,i,a)=>i&&r>a[i-1]).length
