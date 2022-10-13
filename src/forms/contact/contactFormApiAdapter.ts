import { Contact } from "./contactFormEntity";
import { ContactResponse } from "./contactFormPorts";

export async function sendContactForm(contact: Contact): Promise<void> {
  const response = await fakeContactBackendResponse(contact);
  if (!response.success) {
    console.error(response.errors); // TODO: Add logger
    throw new Error(response.errors.join(", "));
  }
}

// Post-JSON parsed response
function fakeContactBackendResponse(
  _contact: Contact
): Promise<ContactResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve({ success: true });
      reject({ success: false, errors: ["Something went wrong"] });
    }, 3000);
  });
}
