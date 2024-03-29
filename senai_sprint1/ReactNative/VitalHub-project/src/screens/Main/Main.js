import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PatientConsultations } from '../PatientConsultations/PatientConsultations';
import { UserProfile } from '../UserProfile/UserProfile';

import { ContentIcon, TextIcon } from './Style';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react';
import { MedicalConsultations } from '../MedicalConsultations/MedicalConsultations';


const BottomTap = createBottomTabNavigator();

export const Main = () => {

    const [profile, setShowProfile] = useState("Paciente")

    return (
        profile === "Paciente" ?
            <BottomTap.Navigator
                initialRouteName='PatientConsultations'

                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                    tabBarActiveBackgroundColor: "transparent",
                    tabBarShowLabel: false,
                    headerShown: false,

                    tabBarIcon: ({ focused }) => {
                        if (route.name === "PatientConsultations") {

                            return (
                                <ContentIcon
                                    tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                                >

                                    <FontAwesome name='calendar' size={18} color="#4E4B59" />
                                    {focused && <TextIcon>Agenda</TextIcon>}

                                </ContentIcon>
                            );
                        }
                        else {
                            return (
                                <ContentIcon
                                    tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                                >

                                    <FontAwesome5 name='user-circle' size={22} color="#4E4B59" />
                                    {focused && <TextIcon>Perfil</TextIcon>}

                                </ContentIcon>
                            )
                        }
                    }
                })}
            >

                <BottomTap.Screen
                    name='PatientConsultations'
                    component={PatientConsultations}
                />


                <BottomTap.Screen
                    name='UserProfile'
                    component={UserProfile}
                />

            </BottomTap.Navigator>

            :

            <BottomTap.Navigator
                initialRouteName='MedicalConsultations'

                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                    tabBarActiveBackgroundColor: "transparent",
                    tabBarShowLabel: false,
                    headerShown: false,

                    tabBarIcon: ({ focused }) => {
                        if (route.name === "MedicalConsultations") {

                            return (
                                <ContentIcon
                                    tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                                >

                                    <FontAwesome name='calendar' size={18} color="#4E4B59" />
                                    {focused && <TextIcon>Agenda</TextIcon>}

                                </ContentIcon>
                            );
                        }
                        else {
                            return (
                                <ContentIcon
                                    tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                                >

                                    <FontAwesome5 name='user-circle' size={22} color="#4E4B59" />
                                    {focused && <TextIcon>Perfil</TextIcon>}

                                </ContentIcon>
                            )
                        }
                    }
                })}
            >

                <BottomTap.Screen
                    name='MedicalConsultations'
                    component={MedicalConsultations}
                />


                <BottomTap.Screen
                    name='UserProfile'
                    component={UserProfile}
                />

            </BottomTap.Navigator>
    )


}