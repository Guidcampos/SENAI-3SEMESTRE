import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="ForgotPass"
                onPress={() => navigation.navigate("ForgotPass")}
            />
        </View>
    )
} 