async function getChefBirthday(id) {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await recipeResponse.json();
    // console.log(recipe);
    const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
    const chef = await chefResponse.json();
    // console.log(chef);
    return chef.birthDate; 
}

(async() => {
    try{
        const birthday = await getChefBirthday(1);
        console.log("Il compleanno dello chef è il:", birthday);
    } catch(error){
        console.error(error);
    }finally{
        console.log("Fine");
    }
})();

