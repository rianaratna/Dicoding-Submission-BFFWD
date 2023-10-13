import '../component/app-bar.js';
import '../component/jumbotron.js';
import'../component/category-list.js';
import '../component/recipe-container.js';
import '../component/search-bar.js';
import DataSource from '../data/data.js';
import navScroll from '../../nav-scroll.js';

const main = function() {

    setTimeout(() => {
        navScroll();
    }, 1000);

    
    // Display Category List
    const categoryList = $('category-list')[0];
    
    const getCategory = async () => {
        try {
            const result = await DataSource.listMealCategories();
            categoryList.categories = result;
        } catch (error) {
            console.log(error);
        }
    };

    getCategory();
    

    // Search Recipe
    const searchContainer = document.querySelector('app-bar').shadowRoot.querySelector('search-container');
    const recipeContainer = document.querySelector('recipe-container');
    
    const onInputSearchField = async () => {
        try {
            const result = await DataSource.searchRecipe(searchContainer.value);
            recipeContainer.recipes = result;
            console.log(result)
        } catch (message) {
            recipeContainer.renderError(message);
        }
    };

    searchContainer.inputEvent = onInputSearchField;




    // Display All Recipe List based on its Categories

    // const categoryItem = document.createElement('category-item');

    // const onClickCategory = async() => {
    //     try {
    //             const clicked = categoryItem.click();
    //             const result = await categoryFilter(clicked);
    //             categoryItem._clickEvent = result;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // categoryItem.clickEvent = onClickCategory;
}



export default main;
