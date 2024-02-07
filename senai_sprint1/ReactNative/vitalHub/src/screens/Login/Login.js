import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { ButtonTitle, ButtonTitleGoogle, TextAcount, Title } from '../../components/Title/Style';
import { Input } from '../../components/Input/Index';''
import { LinkBold, LinkMedium } from '../../components/Links/Style';
import { Button, ButtonGoogle } from '../../components/Button/Style';
import { AntDesign } from '@expo/vector-icons';
import { ContentAcount } from './Style';


export const Login = () => {
    return (
        <Container>
            <Logo
                source={require("../../assets/logo.png")}   
            />
            
            <Title>Entrar ou criar uma conta</Title>
            
            <Input placeholder={"Usuário ou E-mail"} placeholderTextColor = {"#34898F"} />
            
            <Input placeholder={"Senha"} placeholderTextColor = {"#34898F"} secureTextEntry={true}/>
            
            <LinkMedium>Esqueceu sua senha?</LinkMedium>
            
            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            
            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAcount>
                <TextAcount>Não tem conta? <LinkBold>Crie uma conta agora!</LinkBold></TextAcount>
            </ContentAcount>
        </Container>
    );
};

