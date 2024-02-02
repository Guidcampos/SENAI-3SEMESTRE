import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ContainerInput, ScrollForm } from "./style";



export function Home() {
    
    const [ cep , setCep ] = useState('')
    const [ endereco, setEndereco ] = useState({})
    
    return (

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='Informar CEP'
                    placeholder='Cep...'
                    keyType='numeric'
                    maxLength={8}
                    editable={true}
                    fieldValue = {cep}
                    onChangeText={(e) => setCep(e)}
                    // fieldWidth
                    // textLabel
                    
                    
                    />
                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                // fieldWidth
                // textLabel
                    fieldValue = {endereco.logradouro}
                // onChangeText
                />
                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                // fieldWidth
                // textLabel
                // fieldValue 
                // onChangeText
                />
                <BoxInput
                    textLabel='Cidade'
                    placeholder='Cidade...'
                // fieldWidth
                // textLabel
                // fieldValue 
                // onChangeText
                />

                <ContainerInput>

                    <BoxInput
                        textLabel='Estado'
                        placeholder='Estado...'
                        fieldWidth = {60}
                    // textLabel
                    // fieldValue 
                    // onChangeText
                    />
                    <BoxInput
                        textLabel='UF'
                        placeholder='UF'
                        fieldWidth= {25}
                    // textLabel
                    // fieldValue 
                    // onChangeText
                    />

                </ContainerInput>

            </ContainerForm>
        </ScrollForm>

    )
}