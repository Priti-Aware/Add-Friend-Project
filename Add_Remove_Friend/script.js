var friend = document.querySelector("h2");
var btn = document.querySelector("button");
var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
        friend.innerHTML="Friend";
        friend.style.color="Green";
        btn.innerHTML="Remove Friend";
        btn.style.backgroundColor="#b7bfc0f4";
        flag=1;
    }
    else{
        friend.innerHTML="Stranger";
        friend.style.color="Red";
        btn.innerHTML="Add Friend";
        btn.style.backgroundColor="#578e90";
        flag=0;
    }
})