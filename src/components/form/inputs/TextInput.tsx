import { TextField as MUITextField, TextFieldProps } from "@mui/material";

const TextInput = ({ ...inputProps }: TextFieldProps) => {
  return (
    <MUITextField
      variant="outlined"
      {...inputProps}
    />
  )
}

export default TextInput;