import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled"
import TextField from "@material-ui/core/TextField"
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"
import { signUp } from "../../services/userRequests";

const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth                        
                        required
                        autoFocus
                        type={"text"}
                    />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                        type={"password"}
                    />
                </InputsContainer>
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Realizar Cadastro!
                    </Button>
            </SignUpFormContainer>
        </form>
    )
}


export default SignUpForm