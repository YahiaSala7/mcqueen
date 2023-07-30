import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Stack } from "@mui/material";
import "./contacts.css";
const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  phone: Yup.number().typeError("phone must be a number"),
  email: Yup.string().email("invalid email format").required("Required !"),
  message: Yup.string().required("Required !"),
});
function FormikContainer() {
  const handleSubmit = (values) => {
    const { name, email, message, subject } = values;
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ errors, touched }) => {
        return (
          <Form className="form">
            <Stack justifyContent="space-between">
              <FormikControl
                errors={errors}
                touched={touched}
                control="name"
                name="name"
                type="name"
                label="Name:"
              />
              <FormikControl
                errors={errors}
                touched={touched}
                control="email"
                name="email"
                type="email"
                label="Email:"
              />
              <FormikControl
                errors={errors}
                touched={touched}
                control="phone"
                name="phone"
                type="phone"
                label="Phone"
              />
              <FormikControl
                errors={errors}
                touched={touched}
                control="textarea"
                name="message"
                label="Message:"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontFamily: "'Roboto Slab', serif",
                  fontWeight: 400,
                  color: "#232222",
                  backgroundColor: "#edb901",
                  borderColor: "#edb901",
                  width: "fit-content",
                  minWidth: "195px",
                  padding: "14px 10px",
                  margin: "auto",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#6d6b6b",
                    borderColor: "#6d6b6b",
                  },
                }}>
                Send
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
