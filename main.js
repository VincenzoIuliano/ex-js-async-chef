function getChefBirthday(id) {
    fetch(`https://dummyjson.com/recipes/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

getChefBirthday(1);