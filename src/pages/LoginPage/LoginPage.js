import React from "react";
import { InputsContainer, LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/logo.png"
import TextField from "@material-ui/core/TextField"
import useForm from '../../hooks/useForm'



const LoginPage = () =>{
    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = () => {

    }
    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                />

                <TextField
                name={"password"}
                value={form.password}
                onChange={onChange}
                />
            </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default LoginPage