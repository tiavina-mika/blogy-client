import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
} & TextFieldProps;

const TextField = ({ name, ...inputProps }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MUITextField
          variant="outlined"
          {...field}
          {...inputProps}
      />
      )}
    />
  )
}

export default TextField;