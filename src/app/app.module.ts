import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppAngularMaterialModule } from "./app-angular-material.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "../components/home/home.component";

const ROUTES: Routes = [{
  path: "home",
  component: HomeComponent
}, {
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppAngularMaterialModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
