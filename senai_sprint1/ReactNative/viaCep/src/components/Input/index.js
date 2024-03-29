import { InputBox } from "./style"

export const Input = ({
    editable,
    placeholder,
    fieldValue,
    keyType,
    onChangeText,
    maxLength,
   

}) => {
    return (

        <InputBox
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
           
        
        />

    )
}