const rates = {};
const input = document.getElementById('inp');
const result = document.getElementById('output');
const select = document.getElementById('select');


async function getCurrency() {

    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const info = await response.json();

    rates.aud = info[0].rate;
    rates.cad = info[1].rate;
    rates.cny = info[2].rate;
    rates.hrk = info[3].rate;
    rates.czk = info[4].rate;
    rates.dkk = info[5].rate;
    rates.hkd = info[6].rate;
    rates.huf = info[7].rate;
    rates.inr = info[8].rate;
    rates.idr = info[9].rate;
    rates.ils = info[10].rate;
    rates.jpy = info[11].rate;
    rates.kzt = info[12].rate;
    rates.krw = info[13].rate;
    rates.mxn = info[14].rate;
    rates.mdl = info[15].rate;
    rates.nzd = info[16].rate;
    rates.nok = info[17].rate;
    rates.rub = info[18].rate;
    rates.sar = info[19].rate;
    rates.sgd = info[20].rate;
    rates.zar = info[21].rate;
    rates.sek = info[22].rate;
    rates.chf = info[23].rate;
    rates.egp = info[24].rate;
    rates.gbp = info[25].rate;
    rates.usd = info[26].rate;
    rates.byn = info[27].rate;
    rates.ron = info[28].rate;
    rates.try = info[29].rate;
    rates.bgn = info[31].rate;
    rates.eur = info[32].rate;
    rates.pln = info[33].rate;
    rates.dzd = info[34].rate;
    rates.bdt = info[35].rate;
    rates.amd = info[36].rate;
    rates.irr = info[37].rate;
    rates.iqd = info[38].rate;
    rates.kgs = info[39].rate;
    rates.lbp = info[40].rate;
    rates.lyd = info[41].rate;
    rates.myr = info[42].rate;
    rates.mad = info[43].rate;
    rates.pkr = info[44].rate;
    rates.vnd = info[45].rate;
    rates.thb = info[46].rate;
    rates.aed = info[47].rate;
    rates.tnd = info[48].rate;
    rates.uzs = info[49].rate;
    rates.tmt = info[50].rate;
    rates.rsd = info[51].rate;
    rates.azn = info[52].rate;
    rates.tjs = info[53].rate;
    rates.gel = info[54].rate;
    rates.brl = info[55].rate;

    showActual();
    console.log(info);

}
getCurrency();

function showActual() {
    const frank = document.getElementById('chf1');
    const dollar = document.getElementById('usd1');
    const euro = document.getElementById('eur1');
    frank.innerHTML = rates.chf;
    dollar.innerHTML = rates.usd;
    euro.innerHTML = rates.eur;
}

input.oninput = function () {
    result.value = (input.value / rates[select.value]).toFixed(2);
}
select.oninput = function () {
    result.value = (input.value / rates[select.value]).toFixed(2);
}
result.oninput = function () {
    input.value = (result.value * rates[select.value]).toFixed(2);
}






