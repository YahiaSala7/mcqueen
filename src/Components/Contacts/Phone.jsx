import { Field } from "formik";
import { Stack, TextField } from "@mui/material";
function Phone(Props) {
  const { name, label, ...rest } = Props;
  return (
    <Stack>
      <Field
        name={name}
        id={name}
        {...rest}
        as={TextField}
        label={`${label}`}
        sx={{
          marginBottom: "15px",
        }}
      />
    </Stack>
  );
}

export default Phone;
