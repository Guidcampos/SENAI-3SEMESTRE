import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { Input } from '../../components/Input/Index';


export const Login = () => {
    return (
        <Container>
            <Logo
                source={require("../../assets/logo.png")}   
            />
            
            <Title>Entrar ou criar uma conta</Title>
            
            <Input placeholder={"Usuário ou E-mail"} placeholderTextColor = {"#34898F"}/>
            
            <Input placeholder={"Senha"} placeholderTextColor = {"#34898F"}/>
            
            {/* <LinkMedium>Esqueceu sua senha</LinkMedium> */}
            
            {/* <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button> */}
            
            {/* <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle> */}

            {/* <ContentAcount>
                <TextAcount>Não tem conta? crie uma conta agora!</TextAcount>
            </ContentAcount> */}
        </Container>
    );
};

