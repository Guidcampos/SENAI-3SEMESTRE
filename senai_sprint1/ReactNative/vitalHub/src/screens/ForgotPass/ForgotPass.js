import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Index"
import { Logo } from "../../components/Logo/Style"
import { ButtonTitle, Descricao, Title } from "../../components/Title/Style"

export const ForgotPass = () => {
    
    return(
        <Container>
            <Logo
                source={require("../../assets/logo.png")}   
            />
            
            <Title>Recuperar senha</Title>
            <Descricao>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Descricao>
            <Input placeholder={"Usuário ou E-mail"} placeholderTextColor = {"#34898F"} />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
            
        </Container>
    )
}