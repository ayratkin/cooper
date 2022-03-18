let date = new Date('may 1 2022 00:00:00');
let globalVarForDays;
let globalVarForHours;
let globalVarForMinutes;
let globalVarForSeconds;

function counts() {
    let now = new Date();
    let gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    globalVarForDays = days;
    let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    globalVarForHours = hours;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    globalVarForMinutes = minutes;
    let seconds = Math.floor(gap / 1000 ) % 60;
    globalVarForSeconds = seconds

    if (gap < 0) {
        days = days + 12;
        hours = hours + 24;
        minutes = minutes + 60;
        seconds = seconds + 60;
    }

    let arrayDays = days.toString(10).split('').map(int => parseInt(int, 10));
    let arrayHours = hours.toString(10).split('').map(int => parseInt(int, 10));
    let arrayMinutes = minutes.toString(10).split('').map(int => parseInt(int, 10));
    let arraySeconds = seconds.toString(10).split('').map(int => parseInt(int, 10));

    if (typeof arrayHours[1] == 'undefined') {
        document.getElementById('h1').innerText = '0';
        document.getElementById('h2').innerText = arrayHours[0];
    } else {
        document.getElementById('h1').innerText = arrayHours[0];
        document.getElementById('h2').innerText = arrayHours[1];
    };

    if (typeof arrayDays[1] == 'undefined') {
        document.getElementById('d1').innerText = '0';
        document.getElementById('d2').innerText = arrayDays[0];
    } else {
        document.getElementById('d1').innerText = arrayDays[0];
        document.getElementById('d2').innerText = arrayDays[1];
    };

    if (typeof arrayMinutes[1] == 'undefined') {
        document.getElementById('m1').innerText = '0';
        document.getElementById('m2').innerText = arrayMinutes[0];
    } else {
        document.getElementById('m1').innerText = arrayMinutes[0];
        document.getElementById('m2').innerText = arrayMinutes[1];
    };


    // console.log(hours);
    // console.log(arrayHours[0]);
    // console.log(arrayHours[1]);
    // console.log(minutes);
    // console.log(arrayMinutes);
}

counts();
setInterval(counts, 1000);


