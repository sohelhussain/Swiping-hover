const btn = document.querySelector(`button`);
const secCard = document.querySelector(`.sec-card`);
var falg = 0;


btn.addEventListener(`click`, function(){
    if(falg == 0){
        secCard.style.animationName = `slide`;
        btn.innerHTML = `SignOut`;
        falg = 1;
    }
    else{
        secCard.style.animationName = `Revslide`;
        btn.innerHTML = `SignUp`;
        falg = 0;
    }
});