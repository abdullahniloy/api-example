//.................................search areaZone
const searchFood = () => {
    const searchField = document.getElementById('search-Id');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText)

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))

}

//....................................display areaZone
const displayFood = (getMeals) => {
    const displayResult = document.getElementById('displayId');
    displayResult.innerHTML = '';
    displayResult.textContent = '';
    getMeals.forEach(meal => {
        //   console.log(meal);

        const sentMealToDiv = document.createElement('div');
        sentMealToDiv.classList.add('col');
        sentMealToDiv.innerHTML = `
        <div class="col">
          <div class="card">
                 <img onclick = "loadMealDetails(${meal.idMeal})" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
    </div>
        `;
        displayResult.appendChild(sentMealToDiv)

    })
}

//-----------------------meal details part

const loadMealDetails = (mealId) => {
    //   console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = (getMealDetails) => {
    const displayMealDtails = document.getElementById('mealDetails');
    console.log(getMealDetails)


    const sentMealDetail = document.createElement('div');
    sentMealDetail.classList.add('card');
    sentMealDetail.innerHTML = `
         <div class="card" style="width: 18rem;">
            <img src="${getMealDetails.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${getMealDetails.strMeal}</h5>
                <p class="card-text">${getMealDetails.strInstructions.slice(0, 100)}</p>
                <a href="${getMealDetails.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
         `;
    displayMealDtails.appendChild(sentMealDetail);


}