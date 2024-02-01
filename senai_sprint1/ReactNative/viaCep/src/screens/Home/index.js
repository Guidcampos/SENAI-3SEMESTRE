import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";

export function Home() {
    return (

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='Informar CEP'
                    placeholder = 'Cep...'
                    keyType= 'numeric' 
                    maxLength = {9}
                    editable = {true}
                    // fieldWidth
                    // textLabel
                    // fieldValue 
                    // onChangeText
                />  









                
            </ContainerForm>
        </ScrollForm>

    )
}