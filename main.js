async function getCurrent (){
const response = await  fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
const info = await response.json();
const result = await info;
    console.log(info)
    console.log(result.Object.RUB);                  // это дерьмище - массив
}
getCurrent();
