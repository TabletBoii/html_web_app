

let tg = window.Telegram.WebApp;

tg.expand();

let items = document.querySelectorAll('.item');

items.forEach(element => {
    element.addEventListener("click", function(){
        tg.sendData(element.id);
    });
});


