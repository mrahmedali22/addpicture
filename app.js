

document.body.style.backgroundColor="aqua";
 

let array=["wallerpaper/A.jpg","wallerpaper/b.png","wallerpaper/c.jpg","wallerpaper/d.jpg","wallerpaper/e.jpg"];
let container=document.createElement("div");
container.style.textAlign="center"
container.style.display="grid";
container.style.gridGap="10px";
let myhead=document.createElement("h2");
let mytext=document.createTextNode("Welcome to First Site");
myhead.appendChild(mytext);
container.appendChild(myhead);

for(let i=0;i<5;i++){
    let z=document.createElement("div");
    z.className="mydiv";
    let mypicture=document.createElement("img");
    mypicture.src=array[i];
    mypicture.style.height="300px";
    mypicture.style.width="600px";
    z.appendChild(mypicture);
    container.appendChild(z);
}
document.body.appendChild(container);