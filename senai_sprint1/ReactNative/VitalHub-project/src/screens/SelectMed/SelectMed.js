import { SelectMedCard } from "../../components/AppointmentCard/AppointmentCard"
import { Button } from "../../components/Button/ButtonStyle";
import { Container } from "../../components/Container/ContainerStyle";
import { LinkCode } from "../../components/Links/Links";
import { ListComponent } from "../../components/List/ListStyles";
import { ButtonTitle, Title, TitleSelect } from "../../components/Title/TitleStyle";
import { ContainerCard, ContentSelectMed } from "./Style";

export const SelectMed = () => {
   
    const Consultas = [
        { id: 1, nome: "Dr Vinicius", situacao: "pendente" },
        { id: 2, nome: "Dr Guilherme", situacao: "realizado" },
        { id: 3, nome: "Dr Eduardo", situacao: "cancelado" }
       
    ];
   
    return (

        <Container>


            <TitleSelect>Selecionar Medico</TitleSelect>

            {/* <ContainerCard>

                    <SelectMedCard
                        ProfileNameCard="Dr Guilherme"
                        textCard="Cirurgião, Cardiologista"
                        imageUrl={{ uri: "https://github.com/Guidcampos.png" }}
                    />
                    <SelectMedCard
                        ProfileNameCard="Dr Matheus"
                        textCard="Cirurgião, Cardiologista"
                        imageUrl={{ uri: "https://github.com/Guidcampos.png" }}
                    />
                    <SelectMedCard
                        ProfileNameCard="Dr Eduardo"
                        textCard="Cirurgião, Cardiologista"
                        imageUrl={{ uri: "https://github.com/Guidcampos.png" }}
                    />
                </ContainerCard>
            */}
            {/* lista */}
            <ListComponent

                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={
                    ({item}) =>
                       (
                            <SelectMedCard
                                ProfileNameCard={item.nome}
                                textCard="Cirurgião, Cardiologista"
                                imageUrl={{ uri: "https://github.com/Guidcampos.png" }}
                            />
                        )
                }

            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <LinkCode>Cancelar</LinkCode>

        </Container>
    );
};

