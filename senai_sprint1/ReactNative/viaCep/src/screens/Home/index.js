import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ContainerInput, ScrollForm } from "./style";
import api from "../../services/Services";
import axios from "axios";


export function Home() {
    
    const [ cep , setCep ] = useState('')
    const [ endereco, setEndereco ] = useState({})
    const [ estado, setEstado ] = useState('')
    
    useEffect(() => {

        const getCep = async () => {
            if (cep !== "" && cep.length === 8) {
                try {
                    const response = await api.get(`${cep}/json/`);
                    
                    if (response.data) {
                        
                        const estado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`)

                       
                        setEndereco(response.data)
                        
                        setEstado(estado.data.nome);
                        
                        

                    } else {

                        alert("Verifique o CEP digitado !!!");

                    }

                   

                    
                } catch (error) {

                    console.log("Ocorreu um erro ao buscar o CEP", error);
                   

                }
            }
        };
        
        if (cep === "") {
            setEndereco({})
            setEstado("")
            
        }
        getCep();

    }, [cep]);

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
                    onChangeText={e => setCep(e)}
                    // fieldWidth
                    // textLabel
                    
                    
                    />
                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    fieldValue = {endereco.logradouro}
                // fieldWidth
                // textLabel
                // onChangeText
                />
                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                    fieldValue = {endereco.bairro}
                // fieldWidth
                // textLabel
                // onChangeText
                />
                <BoxInput
                    textLabel='Cidade'
                    placeholder='Cidade...'
                    fieldValue ={endereco.localidade}
                // fieldWidth
                // textLabel
                // onChangeText
                />

                <ContainerInput>

                    <BoxInput
                        textLabel='Estado'
                        placeholder='Estado...'
                        fieldWidth = {60}
                        fieldValue = {estado}
                    // textLabel
                    // onChangeText
                    />
                    <BoxInput
                        textLabel='UF'
                        placeholder='UF'
                        fieldWidth= {25}
                        fieldValue ={endereco.uf}
                    // textLabel
                    // onChangeText
                    />

                </ContainerInput>

            </ContainerForm>
        </ScrollForm>

    )
}