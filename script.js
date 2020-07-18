let box=document.getElementById('container');
let colors=document.getElementById('colors');
let totalBoxes=20;
let totalColor=["red","blue","green","black"];
let curColor="black";
for(let i=0;i<totalBoxes*totalBoxes;i++)
{
    let divElem=document.createElement('div');
    divElem.classList.add('box');
    divElem.addEventListener('click',function(){
        this.style.backgroundColor=curColor;
    });
    box.appendChild(divElem);

}

for(let j=0;j<totalColor.length;j++)
{
    let colordiv=document.createElement('div');
    colordiv.classList.add('box');
    colordiv.style.backgroundColor=totalColor[j];
    colordiv.addEventListener('click',function(){
        curColor=totalColor[j];
    });
    colors.appendChild(colordiv);
}