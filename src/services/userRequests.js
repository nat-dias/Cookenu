import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToRecipesList(history)
        setRightButtonText('Logout')
    })
    .catch((error) => alert(error.response.data.message))
}
export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToRecipesList(history)
        setRightButtonText('Logout')
    })
    .catch((error) => alert(error.response.data.message))
}
