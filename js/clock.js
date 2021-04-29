function getName() {
    let userName = prompt("Adınız nedir?: ")
    let greeting = document.querySelector("#myName")
    greeting.innerHTML = `${userName}`
}


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function showTime() {
    let d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let days = d.getDay();

    switch (days) {
        case 0:
            days = "Pazar";
            break;
        case 1:
            days = "Pazartesi";
            break;
        case 2:
            days = "Salı";
            break;
        case 3:
            days = "Çarşamba";
            break;
        case 4:
            days = "Perşembe";
            break;
        case 5:
            days = "Cuma";
            break;
        case 6:
            days = "Cumartesi";
            break;
        default:
            days = "Unknown Day";
    }

    let time = `${h}:${m}:${s} ${days}`;
    document.querySelector("#myClock").innerHTML = time;

    setTimeout(showTime, 1000);

}

getName();
showTime();