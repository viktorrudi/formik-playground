import { Button, ButtonProps } from "../../atoms/Inputs/Button";
import { Block } from "../../atoms/Layout/Block";

type ActionsProps = { children: JSX.Element | JSX.Element[] };
type ActionProps = Omit<ButtonProps, "variant">;

function Actions(props: ActionsProps) {
  return (
    <Block
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        gap: theme.spacing(1),
      })}
      {...props}
    ></Block>
  );
}

type SubmitActionProps = ActionProps & { isSubmitting?: boolean };
function SubmitAction({ isSubmitting, children }: SubmitActionProps) {
  return (
    <Button type="submit" variant="contained" disabled={isSubmitting}>
      {children}
    </Button>
  );
}

function CancelAction(props: ActionProps) {
  return <Button {...props} />;
}

Actions.Submit = SubmitAction;
Actions.Cancel = CancelAction;

export { Actions };
