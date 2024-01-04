import { FormHelperText, Stack, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import TextInput from "../inputs/TextInput";

type Props = {
  name: string;
} & TextFieldProps;

const TextField = ({ name, ...inputProps }: Props) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Stack spacing={1}>
          <TextInput
            error={!!errors?.[name]}
            {...field}
            {...inputProps}
          />
          {errors?.[name] && <FormHelperText error>{(errors as any)[name]?.message}</FormHelperText>}
        </Stack>
      )}
    />
  )
}

export default TextField;