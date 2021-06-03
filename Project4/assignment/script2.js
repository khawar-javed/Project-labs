const selectCurrency = document.getElementById('select-currency')
const allRates = document.getElementById('rates-text')


function exchangeRates() { 
    const selectedcurrency = selectCurrency.value;

    fetch(`https://v6.exchangerate-api.com/v6/0a69957f1e4edf7f5b58412f/latest/${selectedcurrency}`)
        .then(res => res.json())
        .then(data => {
            const ratesEnt = data.conversion_rates;
            
            addElement(ratesEnt);
        })
}

function addElement(ratesEnt){

    allRates.innerHTML = '<h3>Country : Conversion Rates</h3>';
    const keys = Object.keys(ratesEnt);
    console.log(typeof keys);
        keys.forEach((key) => {
        console.log(`${key}: ${ratesEnt[key]}`);
        const newDiv = document.createElement("div");
        newDiv.classList.add('element');
        newDiv.innerHTML = `${key} : ${ratesEnt[key]}`;
        allRates.appendChild(newDiv);

        });

}

selectCurrency.addEventListener('change', exchangeRates)