import React from "react";
import { InputsContainer, SignUpButtonContainer } from "./styled"
import TextField from "@material-ui/core/TextField"
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import {login} from '../../services/userRequests'
import { useHistory } from "react-router-dom";

const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }

    
    return (

        <form onSubmit={onSubmitForm}>
            <InputsContainer>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <SignUpButtonContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                >
                    Fazer Login!
                </Button>
                
            </SignUpButtonContainer>
            </InputsContainer>            
        </form>
    )
}

export default LoginForm