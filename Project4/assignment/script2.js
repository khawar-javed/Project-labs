const selectCurrency = document.getElementById('select-currency')
const allRates = document.getElementById('rates-text')


function exchangeRates() { 
    const selectedcurrency = selectCurrency.value;

    fetch(`https://v6.exchangerate-api.com/v6/241d13dc13449dd721b8d6bb/latest/${selectedcurrency}`)
        .then(res => res.json())
        .then(data => {
            const ratesEnt = data.conversion_rates;
            
            addElement(ratesEnt);
        })
}

function addElement(ratesEnt){

    allRates.innerHTML = ''
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