//  Part 1
document.body.innerText.trim().split("\n").filter(r=>r.substr(0,2)=='fo').map(r=>r.split(" ")[1]*1).reduce((t,r)=>t+r)*(document.body.innerText.trim().split("\n").filter(r=>r.substr(0,2)=='do').map(r=>r.split(" ")[1]*1).reduce((t,r)=>t+r)-document.body.innerText.trim().split("\n").filter(r=>r.substr(0,2)=='up').map(r=>r.split(" ")[1]*1).reduce((t,r)=>t+r))

// Part 2
d=0,p=0,a=0
document.body.innerText.trim().split("\n").map(r=>r.split(" ")).map(r=>[r[0],r[1]*1]).forEach(r=>{if(r[0]=='forward'){p+=r[1];d+=r[1]*a}else{a+=r[0]=='up'?-r[1]:r[1]}})
p*d
