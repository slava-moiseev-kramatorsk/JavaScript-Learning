const rates = {};
let arr = [];
const input = document.getElementById('inp');
const output = document.getElementById('output');
const select = document.getElementById('select');


async function getInfo() {

    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const info = await response.json();


    rates.usd = info[26].rate;
    rates.eur = info[32].rate;
    rates.chf = info[23].rate;
    console.log(rates.eur);
    console.log(rates);
    showActual();
    console.log(info);
    for (let i = 0; i < info.length; i++) {
        arr[i] = info[i];
    }
    console.log(arr[13].txt);

    function f1() {
        let sel = document.getElementById('select');

        for (let i = 0; i < arr.length; i++) {
            console.log(i)
            let option = document.createElement('option');
            console.log(arr[i].txt)
            option.innerHTML = arr[i].txt;
            sel.append(option);
        }
    }
f1();
}

getInfo();

function showActual() {
    const frank = document.getElementById('chf1');
    const dollar = document.getElementById('usd1');
    const euro = document.getElementById('eur1');
    frank.innerHTML = rates.chf;
    dollar.innerHTML = rates.usd;
    euro.innerHTML = rates.eur;
}

input.oninput = function () {
    console.log('it work');
    output.value = (input.value / rates[select.value]).toFixed(2);
}
select.oninput = function () {
    output.value = (input.value / rates[select.value]).toFixed(2);
}
output.oninput = function () {
    input.value = (output.value * rates[select.value]).toFixed(2);
}






