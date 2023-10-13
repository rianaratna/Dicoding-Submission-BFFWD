class DataSource {
    static listMealCategories() {
        return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.categories) {
                    return Promise.resolve(responseJson.categories);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    static searchRecipe(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
            .catch(error => {
                console.error('Error during search: ', error);
            })
    }

    static filterByCategory(keyword) {
        return fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return responseJson.meals;
            })
            .catch(error => {
                return error;
            })
    }
}

export default DataSource;