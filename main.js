async function getInfo (){
const response = await  fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
const info = await response.json();
const result = await info;
    console.log(info)                       //// это дерьмище - массив
    console.log(info[1].rate);              // работает через массив.
    const obj = Object.assign({}, result);
    // console.log(obj);                  //теперь это объект и невозможно получить значение,сука.
    function mainUah(){
        let var1 = document.getElementById('chf1');
        let var2 = document.getElementById('usd1');
        let var3 = document.getElementById('eur1');
        var1.innerHTML = info[23].rate;
        var2.innerHTML = info[26].rate;
        var3.innerHTML = info[32].rate;
        console.log(var1);
    }
    mainUah();
}


getInfo();
