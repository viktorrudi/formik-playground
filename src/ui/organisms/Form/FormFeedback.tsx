import { Alert } from "@mui/material";
import {
  SimpleList,
  SimpleListItemProps,
} from "../../atoms/DataDisplay/SimpleList";
import { Text } from "../../atoms/DataDisplay/Text";

type FormFeedbackProps = {
  variant: "warning" | "success" | "error";
  title: string;
  children?: JSX.Element | JSX.Element[];
};
function FormFeedback({ title, children, variant }: FormFeedbackProps) {
  return (
    <Alert color={variant}>
      <Text>{title}</Text>
      {children && <SimpleList component="ul">{children}</SimpleList>}
    </Alert>
  );
}

function FormFeedbackItem(props: SimpleListItemProps) {
  return <SimpleList.Item {...props} />;
}

FormFeedback.Item = FormFeedbackItem;

export { FormFeedback };
