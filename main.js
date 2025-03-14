async function getChefBirthday(id) {

    let recipe;
    try{
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        recipe = await recipeResponse.json();        
    }catch(error){
        console.error(error);
        throw new Error(`Errore nel caricamento della ricetta con id: ${id}`);
    }
    if(recipe.message){
        throw new Error(`Ricetta con id: ${id} non trovata`);
    }

    let chef;
    try{
        const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
        chef = await chefResponse.json();
    }catch(error){
        console.log(error);
        throw new Error(`Errore nel caricamento dello chef con id: ${recipe.userId}`);
        }
    if(chef.message){
        throw new Error(`Chef con id: ${recipe.userId} non trovato`);
    }
    
    const newDate = dayjs(chef.birthDate).format('DD/MM/YYYY')
    return newDate; 
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

