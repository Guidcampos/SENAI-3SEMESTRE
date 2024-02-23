import { Modal } from "react-native"
import { AppointmentImageModal, AppointmentModalContent, AppointmentModalText, AppointmentPatientModal } from "../AppointmentModal/Style"
import { LinkCodeModal } from "../Links/Links"
import { ButtonModal } from "../Button/ButtonStyle"
import { ButtonTitle, Title } from "../Title/TitleStyle"
import { ContainerMedicalRecord } from "../Container/ContainerStyle"

export const BookModal = ({
    visible,
    setShowModalAppointment,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <AppointmentPatientModal>

                {/* Content */}
                <AppointmentModalContent>

                  
                    <Title>Agendar consulta</Title>
                   
                    <ContainerMedicalRecord>
                        

                    </ContainerMedicalRecord>

                    <ButtonModal>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModal>

                    {/* <ButtonSecondary>
                        <ButtonTitleSecondary>Cancelar</ButtonTitleSecondary>
                    </ButtonSecondary> */}

                    <LinkCodeModal onPress={() => setShowModalAppointment(false)}>Cancelar</LinkCodeModal>

                </AppointmentModalContent>

            </AppointmentPatientModal>



        </Modal>
    )
}