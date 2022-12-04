const randomUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayUserData(data))
}

randomUser();

const displayUserData = (getData) => {
    //console.log(getData)
    const getUserData = getData.results;
    console.log(getUserData)
    const sentToDisplay = document.getElementById('userId')
    for (const user of getUserData) {
        // console.log(user.name.title)
        const newParagraph = document.createElement('p');
        newParagraph.innerText = `Name: ${user.name.first} ${user.name.last} Email: ${user.email}
        
        `;
        sentToDisplay.appendChild(newParagraph)
    }
}