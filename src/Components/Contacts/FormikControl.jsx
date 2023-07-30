import Input from "./Input";
import Phone from "./Phone";
import TextArea from "./TextArea";
import Name from "./name";
function FormikControl(Props) {
  const { control, ...rest } = Props;
  switch (control) {
    case "email":
      return <Input {...rest} />;
    case "name":
      return <Name {...rest} />;
    case "phone":
      return <Phone {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
