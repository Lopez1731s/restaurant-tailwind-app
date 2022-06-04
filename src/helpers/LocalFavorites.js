
export const LocalFavorites = () => {
    const toggleFavorite = (meal) => {

        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (favorites.includes(meal)) {
            favorites = favorites.filter(item => item !== meal);
        } else {
            favorites.push(meal);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    const existInFavorites = (meal) => {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        return favorites.includes(meal);
    }

    const meals = () => {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    return { toggleFavorite, existInFavorites, meals }
}