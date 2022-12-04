//search area

const searchFood = () => {
    const searchField = document.getElementById('search-id');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText)

    // load data from api url

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealData(data.meals))

}
//console.log('Food dibi kina bol')

const displayMealData = (getmeals) => {
    // console.log(getmeals)

    const displayId = document.getElementById('displayId');
    displayId.textContent = '';
    getmeals.forEach(meal => {
        // console.log(meal)

        const sentMealToDiv = document.createElement('div');
        sentMealToDiv.classList = 'col';
        sentMealToDiv.innerHTML = `
        <div class="col">
        <div class="card h-100">
            <img onclick = 'loadMeadId(${meal.idMeal})' src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            </div>
        </div>
    </div>
        `;

        displayId.appendChild(sentMealToDiv);


    })


}


const loadMeadId = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (getMealDetails) => {
    console.log(getMealDetails)
    const displayArea = document.getElementById('showMealDetailId');
    const div = document.createElement('div');
    div.classList = ('card');
    div.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
            <img src="${getMealDetails.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${getMealDetails.strMeal}</h5>
                <p class="card-text">${getMealDetails.strInstructions.slice(0, 100)}</p>
                <a  href="${getMealDetails.strYoutube
        }" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;

    displayArea.appendChild(div)
}