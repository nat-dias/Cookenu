export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSingUp = (history) => {
    history.push("/sing-up")
}

export const goToAddRecipes = (history) => {
    history.push("/add-recipes")
}

export const goToRecipeDetails = (history) => {
    history.push(`/recipe-details/:id`)
}

export const goToRecipesList = (history) => {
    history.push("/")
}
