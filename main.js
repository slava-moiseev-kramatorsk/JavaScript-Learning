const rates = {};
const input = document.getElementById('inp');
const output = document.getElementById('output');
const select = document.getElementById('selector');

getInfo();
async function getInfo (){
const response = await  fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
const info = await response.json();
const result = await info;                          //// это - массив

    const obj = Object.assign({}, result);          //теперь это объект и невозможно получить значение,сука.

    rates.usd = info[26].rate;
    rates.eur = info[32].rate;
    rates.chf = info[23].rate;
    console.log(rates);
    showActual();
    }
function showActual(){
    let var1 = document.getElementById('chf1');
    let var2 = document.getElementById('usd1');
    let var3 = document.getElementById('eur1');
    var1.innerHTML = rates.chf;
    var2.innerHTML = rates.usd;
    var3.innerHTML = rates.eur;
}


input.onchange = function (){
    console.log('rabotaet');
}



    // let currencyIn = document.getElementById('list1').children[1].value;      // содержание выпдающего элемента по индексу
    // console.log(currencyIn);






