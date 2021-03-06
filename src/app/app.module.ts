import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormioAppConfig } from "angular-formio";
import { FormioAuthService, FormioAuthConfig } from "angular-formio/auth";
import { AuthConfig, AppConfig } from "../config";
import { FormioResources } from "angular-formio/resource";

import { AuthModule } from "./auth/auth.module";
import { EventModule } from "./event/event.module";

import { AppComponent } from "./app.component";
import { GelsSampleComponent } from "./gels-sample/gels-sample.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";

// export function AuthModule() {
//   var am = require("./auth/auth.module");
//   return am;
// }
// export function EventModule() {
//   var em = require("./event/event.module");
//   return em;
// }

@NgModule({
  declarations: [
    AppComponent,
    GelsSampleComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "auth",
        loadChildren: () =>AuthModule //lazy loading
      },
      {
        path: "event",
        loadChildren: () => EventModule
      }
    ])
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    { provide: FormioAuthConfig, useValue: AuthConfig },
    { provide: FormioAppConfig, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
