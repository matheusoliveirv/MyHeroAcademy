function blackHeader(){
    if(scrollY <= 10){
        document.querySelector('#header').classList.remove('blur');
    } else{
        document.querySelector('#header').classList.add('blur');
    }
};
addEventListener ('scroll', blackHeader);