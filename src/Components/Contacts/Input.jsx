import { Field } from "formik";
import { Stack, TextField } from "@mui/material";
function Input(Props) {
  const { name, label, ...rest } = Props;
  return (
    <Stack>
      <Field name={name} id={name} {...rest} sx={{}}>
        {({ field, form }) => {
          return (
            <TextField
              label={label}
              required
              {...rest}
              error={form.touched.email && form.errors.email ? true : false}
              {...field}
              type="text"
              sx={{
                marginBottom: "15px",
              }}
            />
          );
        }}
      </Field>
    </Stack>
  );
}

export default Input;
