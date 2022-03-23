import React from "react"
import { Switch, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"


const Router = ({rightButtonText, setRightButtonText}) => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginPage setRightButtonText={setRightButtonText} />
            </Route>

            <Route exact path="/sign-up">
                <SignUpPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path="/add-recipes">
                <AddRecipesPage />
            </Route>

            <Route exact path="/recipe-details/:id">
                <RecipeDetailsPage />
            </Route>

            <Route exact path="/">
                <RecipesListPage />
            </Route>

            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Router