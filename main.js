const rates = {};
let input = document.getElementById('inp');
console.log(input);
let output = document.getElementById('output');
const select = document.getElementById('select');


async function getInfo (){
const response = await  fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
const info = await response.json();
const result = await info;                          //// это - массив

    const obj = Object.assign({}, result);        //теперь это объект и невозможно получить значение,сука.

    rates.usd = info[26].rate;
    rates.eur = info[32].rate;
    rates.chf = info[23].rate;
    console.log(rates.eur);
    console.log(rates);
    showActual();
    }
getInfo();

function showActual(){
    let var1 = document.getElementById('chf1');            //актуальное значение в табло
    let var2 = document.getElementById('usd1');
    let var3 = document.getElementById('eur1');
    var1.innerHTML = rates.chf;
    var2.innerHTML = rates.usd;
    var3.innerHTML = rates.eur;
}


input.oninput = function (){
    console.log('it work');
    output.value = (input.value / rates[select.value]).toFixed(2);
}
select.oninput = function (){
    output.value = (input.value / rates[select.value]).toFixed(2);
}
// output.value = 12312;
console.log(rates);





