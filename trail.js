let arr=[1,2,3];
n=0;
p=document.getElementById("number");
console.log(p);
p.innerHTML=arr[n];
function left(){
    if(n-1<0){
        n=(arr.length);
    }
    n=n-1;
    p.innerHTML= arr[n];
}
function right(){
    if(n+1==(arr.length)){
        n=-1;
    }
    n=n+1;
    p.innerHTML= arr[n];
}