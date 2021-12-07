async function getInfo (){
const response = await  fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
const info = await response.json();
const result = await info;
    console.log(info)                       //// это дерьмище - массив
    const obj = Object.assign({}, result);
    console.log(obj);                  //теперь это объект
    console.log(obj.RUB);
}
getInfo();
