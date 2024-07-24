n_l=[];
list=document.getElementById("title").childNodes[1].childNodes;
for(i=1;i<6;i+=2)
n_l.push(list[i]);
n=0;
console.log(n_l);
function left(){
    n_l[n].style.display="none";
    if(n-1<0){
        n=(n_l.length);
    }
    n=n-1;
    n_l[n].style.display="flex";
}
function right(){
    n_l[n].style.display="none";
    if(n+1>=(n_l.length)){
        n=-1;
    }
    n=n+1;
    n_l[n].style.display="flex";
}

recipe=document.getElementById("recipes");
function theme_change(n){
    if(n==1){
        recipe.innerHTML=`
        <h2>Wish to spend a ROMANTIC Night cooking together?</h2>
        <h4>We have got You covered. Pick from the huge variety of recipes</h4>
        <button>Check Out some Recipes</button><br>
        Not Interested Change theme:
        <button onclick="theme_change(2)">Change this!</button>`;
        recipe.style.background="url(images/design.png)";
        recipe.style.backgroundSize="cover";
    }
    else{
        recipe.innerHTML=`
        <h2>Wish to spend a NIGHTOUT with friends?</h2>
        <h4>Here are some food to get the restraunt feel at home</h4>
        <button>Check Out some Recipes</button><br>
        Not Interested Change theme:
        <button onclick="theme_change(1)">Change this!</button>`;
        recipe.style.background="url(images/single.png)";
        recipe.style.backgroundSize="cover";
    }
}