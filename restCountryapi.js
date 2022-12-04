const loadCountriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayData(data))
}

loadCountriesData();

const displayData = getCountry => {
    //  console.log(getCountry)

    /*  for (const country of getCountry) {
           console.log(country.name)
      }*/
    const sentToDisplay = document.getElementById('displayID');
    getCountry.forEach(country => {
        console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        const h3 = document.createElement('h3');
        h3.innerText = `${country.name.common}`;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = `${country.capital}`
        div.appendChild(p);
        // sentToDisplay.appendChild(h3);
        // sentToDisplay.appendChild(p);
        sentToDisplay.appendChild(div)


    })
}