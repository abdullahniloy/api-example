const searchPhone = () => {
    const searchText = document.getElementById('search-id').value;
    document.getElementById('search-id').value = '';
    // console.log(searchText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = (getData) => {
    //console.log(getData);
    const displayResult = document.getElementById('displayId')
    displayResult.textContent = '';

    // if data not found
    // if (getData == 0) {
    //     console.log('No data found')

    //     const noDataFound = document.getElementById('emptyDataId');
    //     noDataFound.textContent = '';
    //     const div = document.createElement('p');
    //     div.innerText = `No Data Found !!!`;
    //     noDataFound.appendChild(div);


    // }

    getData.forEach(data => {
        //console.log(data);

        const div = document.createElement('div');
        div.classList = ('col');
        div.innerHTML = `
                <div class="col">
                        <div class="card h-100">
                            <img src="${data.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                ${data.phone_name}
                                </h5>
                                <p class="card-text">${data.brand}</p>
                            </div>
                            <div class="card-footer">
                            <button onclick = 'loadDetails(${JSON.stringify(data.slug)})' type="button" class="btn btn-outline-primary">Details</button>
                            </div>
                        </div>
                    </div>
    
                `;
        displayResult.appendChild(div);
    })

}


//  sshow details

const loadDetails = (details) => {
    //  console.log(details);
    const url = ` https://openapi.programming-hero.com/api/phone/${details}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))

}

//display details
const displayDetails = (getdetails) => {
    console.log(getdetails);
    const displayDetailHere = document.getElementById('displayDetails');
    displayDetailHere.textContent = '';
    const div = document.createElement('div');
    div.classList = ('card');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
                <img src="${getdetails.data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Storage:${getdetails.data.mainFeatures?.storage
        }</p>
                    <p class="card-text">Display: ${getdetails.data.mainFeatures?.displaySize

        }</p>
                    <p class="card-text">GPS: ${getdetails.data.others?.GPS
        }</p>
                    <p class="card-text">USB: ${getdetails.data.others?.USB

        }</p>
                    <p class="card-text">WLAN: ${getdetails.data.others?.WLAN

        }</p>
                    <p class="card-text">NFC: ${getdetails.data.others?.NFC
        }</p>
                    <p class="card-text">Release: ${getdetails.data?.releaseDate
        }</p>
                </div>
            </div>
    `;

    displayDetailHere.appendChild(div);
}