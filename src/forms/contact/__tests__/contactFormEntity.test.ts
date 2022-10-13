import { validateFields } from "../contactFormEntity";

describe("Contact form entity", () => {
  test("validateFields", () => {
    const validationFailResult = validateFields({
      name: "",
      email: "",
      gender: "female",
      favorite_movie: "pulp-fiction",
      accepted_terms: false,
    });

    const validationSuccessResult = validateFields({
      name: "A Name",
      email: "",
      gender: "female",
      favorite_movie: "pulp-fiction",
      accepted_terms: false,
    });

    expect(Object.keys(validationFailResult).length).toBe(1);
    expect(Object.keys(validationSuccessResult).length).toBe(0);
  });
});
