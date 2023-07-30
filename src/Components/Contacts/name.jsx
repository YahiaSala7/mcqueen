import { Field } from "formik";
import { Stack, TextField } from "@mui/material";
function Name(Props) {
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
              error={form.touched.name && form.errors.name ? true : false}
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

export default Name;
