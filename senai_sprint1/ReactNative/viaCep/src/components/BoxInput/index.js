import { Input } from "../Input"
import { Label } from "../Label"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
    
}) => {
    return (
        <FieldContent fieldWidth = {fieldWidth}>
            <Label textLabel={textLabel}/>

            <Input 
            editable={editable} 
            placeholder={placeholder}
            fieldValue={fieldValue}
            keyType={keyType}
            maxLength={maxLength}
            onChangeText={onChangeText}
            
            />
        </FieldContent>


    )
}

