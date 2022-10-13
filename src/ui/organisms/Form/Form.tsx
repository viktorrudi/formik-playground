import { Actions } from "./FormActions";
import { FormFeedback } from "./FormFeedback";
import { CheckboxGroup, RadioGroup, SelectGroup } from "./FormGroups";

/**
 * Wrapper for Form components. Only used to serve groups and actions.
 * Prefer to instead use form handler from chosen library.
 */
type FormProps = {
  children: JSX.Element | JSX.Element[];
};
function Form({ children }: FormProps) {
  return <>{children}</>;
}

Form.CheckboxGroup = CheckboxGroup;
Form.RadioGroup = RadioGroup;
Form.SelectGroup = SelectGroup;
Form.Actions = Actions;
Form.Feedback = FormFeedback;

export { Form };
