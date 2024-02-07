import { InputBox } from "./Style"

export const Input = ({
    placeholder,
    fieldValue,
    keyType,
    onChangeText,
    placeholderTextColor,
    secureTextEntry = false
   
   

}) => {
    return (

        <InputBox
            placeholder={placeholder}
            value={fieldValue}
            keyboardType={keyType}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
           
        
        />

    )
}