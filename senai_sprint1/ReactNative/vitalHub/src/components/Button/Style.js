import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    background-color: #496BBA;
    border: 1px solid #496BBA;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border-radius: 5px;
    padding: 12px 8px 12px 8px;
`
export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    flex-direction: row;
    gap: 27px;
    margin-top: 15px;
`