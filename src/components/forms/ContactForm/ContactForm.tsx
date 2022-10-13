import { Form as FormikForm, Formik, FormikHelpers } from "formik";

import { sendContactForm } from "../../../forms/contact/contactFormApiAdapter";
import {
  Contact,
  DEFAULT_CONTACT_FORM,
  validateFields,
} from "../../../forms/contact/contactFormEntity";

import { TextInput } from "../../../ui/atoms/Inputs/TextInput";
import { Grid } from "../../../ui/atoms/Layout/Grid";
import { CheckboxField } from "../../../ui/molecules/Form/CheckboxField";
import { RadioField } from "../../../ui/molecules/Form/RadioField";
import { Select } from "../../../ui/molecules/Form/Select";
import { Form } from "../../../ui/organisms/Form";

export function ContactForm() {
  async function onSubmit(values: Contact, actions: FormikHelpers<Contact>) {
    try {
      await sendContactForm(values);
      actions.setStatus("submitted");
    } catch (err) {
      actions.setStatus("networkError");
    }
  }

  return (
    <Formik
      initialValues={DEFAULT_CONTACT_FORM}
      onSubmit={onSubmit}
      validate={validateFields}
    >
      {({
        values,
        handleChange,
        handleReset,
        isSubmitting,
        errors,
        status,
      }) => (
        <FormikForm>
          <Grid spacing={2}>
            {/* 
              TODO: Make this more DRY by abstracting insertion of Form elements
            */}
            <Grid.Item xs={12} md={6}>
              <TextInput
                fullWidth
                autoFocus
                error={"name" in errors}
                name="name"
                label="Full name"
                value={values.name}
                onChange={handleChange}
              />
            </Grid.Item>
            <Grid.Item xs={12} md={6}>
              <TextInput
                fullWidth
                type="email"
                name="email"
                label="Email address"
                value={values.email}
                onChange={handleChange}
              />
            </Grid.Item>

            <Grid.Item xs={12}>
              <Form.RadioGroup
                row
                title="Please select your gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <RadioField label="Male" value={"m"} />
                <RadioField label="Female" value={"f"} />
                <RadioField label="Other" value={"o"} />
              </Form.RadioGroup>
            </Grid.Item>

            <Grid.Item xs={12}>
              <Form.SelectGroup title="Favorite Movie">
                <Select
                  fullWidth
                  value={values["favorite_movie"]}
                  name="favorite_movie"
                  label="Favorite Movie"
                  onChange={handleChange}
                >
                  <Select.Item value="pulp-fiction">Pulp Fiction</Select.Item>
                  <Select.Item value="the-shining">The Shining</Select.Item>
                  <Select.Item value="the-godfather">The Godfather</Select.Item>
                </Select>
              </Form.SelectGroup>
            </Grid.Item>

            <Grid.Item xs={12}>
              <Form.CheckboxGroup row>
                <CheckboxField
                  name="accepted_terms"
                  label="I want to get newsletters"
                  value="accepted_terms"
                  onChange={handleChange}
                />
              </Form.CheckboxGroup>
            </Grid.Item>

            {/* TODO: Extract to common form component */}
            {Object.keys(errors).length > 0 && (
              <Grid.Item xs={12}>
                <Form.Feedback
                  variant="warning"
                  title="Please fix these issues:"
                >
                  {Object.values(errors).map((message) => (
                    <Form.Feedback.Item key={message}>
                      {message}
                    </Form.Feedback.Item>
                  ))}
                </Form.Feedback>
              </Grid.Item>
            )}

            {/* TODO: Make type safe */}
            {status === "networkError" && (
              <Grid.Item xs={12}>
                <Form.Feedback
                  variant="error"
                  title="Sorry, something happened. Please try again or come back later."
                />
              </Grid.Item>
            )}

            {/* TODO: Make type safe */}
            {status === "submitted" && (
              <Grid.Item xs={12}>
                <Form.Feedback variant="success" title="Thanks, we got it!" />
              </Grid.Item>
            )}

            <Grid.Item xs={12}>
              <Form.Actions>
                <Form.Actions.Cancel
                  disabled={isSubmitting}
                  onClick={handleReset}
                >
                  Reset
                </Form.Actions.Cancel>
                <Form.Actions.Submit isSubmitting={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
                </Form.Actions.Submit>
              </Form.Actions>
            </Grid.Item>
          </Grid>
        </FormikForm>
      )}
    </Formik>
  );
}
