import { Field } from "formik";
import { Box, TextField } from "@mui/material";
function TextArea(Props) {
  const { name, label, ...rest } = Props;

  return (
    <Box className="">
      <Field name={name} id={name} {...rest} sx={{}}>
        {({ field, form }) => {
          return (
            <TextField
              label={label}
              multiline
              rows={3}
              required
              {...rest}
              error={form.touched.message && form.errors.message ? true : false}
              {...field}
              type="text"
              sx={{
                marginBottom: "15px",
                width: "100%",
              }}
            />
          );
        }}
      </Field>
    </Box>
  );
}

export default TextArea;
