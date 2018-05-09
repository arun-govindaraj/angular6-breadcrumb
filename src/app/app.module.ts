import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppAngularMaterialModule } from "./app-angular-material.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "../components/home/home.component";
import { BreadcrumbsComponent } from "../components/breadcrumbs/breadcrumbs.component";

import { Breadcrumb } from "../models/breadcrumb";

const ROUTES: Routes = [{
  path: "home",
  component: HomeComponent,
  data: {
    breadcrumbs: [
      new Breadcrumb("Home", "/home")
    ]
  }
}, {
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreadcrumbsComponent
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
