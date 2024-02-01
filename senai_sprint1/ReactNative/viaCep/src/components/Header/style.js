import styled from "styled-components";

export const HeaderContainer = styled.View`
    background-color: #fecc2b;
    height: 20%;
    border-radius: 0px 0px 20px 20px;
    align-items: center;    
    justify-content: center;
    /* box-shadow: 0px 0px 10px #00000030; */
    
    /* ANDROID */
    shadow-color: 'black';
    shadow-opacity: 0.26;
    shadow-offset: 200px 20px;
    shadow-radius: 10px;
    elevation: 10;
    
`
export const HeaderContent = styled.SafeAreaView`
    margin-top: 30px;
`
export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: Roboto_500Medium;
`