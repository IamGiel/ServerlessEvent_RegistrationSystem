import { FormioAppConfig } from "angular-formio";
import { FormioAuthConfig } from "angular-formio/auth";

export const AppConfig: FormioAppConfig = {
  appUrl: "https://vgkdfajnvkpizch.form.io",//copied from form.io url account
  apiUrl: "https://api.form.io",
  icons: "fontawesome"
};

export const AuthConfig: FormioAuthConfig = {
  login: {
    form: "user/login"
  },
  register: {
    form: "user/register"
  }
};
