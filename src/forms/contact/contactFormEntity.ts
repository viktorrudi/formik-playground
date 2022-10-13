export type Contact = {
  name: string;
  email: string;
  gender: "female" | "male" | "other";
  favorite_movie: "pulp-fiction" | "the-shining" | "the-godfather";
  accepted_terms: boolean;
};

export const DEFAULT_CONTACT_FORM: Contact = {
  name: "",
  email: "",
  favorite_movie: "pulp-fiction",
  gender: "female",
  accepted_terms: false,
};

// TODO: Validate each field (data type, required, etc...)
export function validateFields(contact: Contact): Record<string, string> {
  if (!contact.name) return { name: "Name is required" };
  return {};
}
