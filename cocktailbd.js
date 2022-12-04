const searchCocktail = () => {
    const searchCocktailItem = document.getElementById('search-id');
    const searchCocktailText = searchCocktailItem.value;
    searchCocktailItem.value = '';
    // console.log(searchCocktailText);


    const url = ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCocktail(data.drinks))
}
//console.log('hi cocktail')

// display part

const displayCocktail = (getData) => {
    // console.log(getData);

    const displayHere = document.getElementById('displayId');
    displayHere.textContent = '';

    getData.forEach(drink => {

        const div = document.createElement('div');
        div.classList = 'col';
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
            <img onclick = 'loadDrinksDetail(${drink.idDrink})' src="${drink.strDrinkThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
        `;
        displayHere.appendChild(div);
    });



}

// drinks details

const loadDrinksDetail = (drinkId) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinkDetails(data.drinks[0]))

    // console.log(getDetail)
}

// display drink details

const displayDrinkDetails = (getDetails) => {
    console.log(getDetails)

    const displayDetails = document.getElementById('details-id');
    const div = document.createElement('div');
    div.classList = 'card';
    div.innerHTML = ` 
    <div class="card" style="width: 18rem;">
            <img src="${getDetails.strDrinkThumb
        }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${getDetails.strDrink}</h5>
                <p class="card-text">${getDetails.strInstructions.slice(0, 100)}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
     `;
    displayDetails.appendChild(div)
}