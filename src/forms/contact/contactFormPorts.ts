export type ContactResponse =
  | {
      success: true;
    }
  | {
      success: false;
      errors: string[];
    };
