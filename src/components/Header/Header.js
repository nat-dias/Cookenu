import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolBar } from './styled'
import Button from '@material-ui/core/Button'
import { goToRecipesList, goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Header = ({ rightButtonText, setRightButtonText }) => {
    const token = localStorage.getItem('token')

    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('token')
    }
    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText('Login')
            goToLogin(history)
        } else {
            goToLogin(history)

        }
    }

    return (
        <AppBar position="static">
            <StyledToolBar>
                <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolBar>
        </AppBar>
    );
}

export default Header