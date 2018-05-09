import { Component } from "@angular/core";
import { ActivationEnd, Router } from "@angular/router";

import { Breadcrumb } from "../../models/breadcrumb";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"]
})
export class BreadcrumbsComponent {

  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationEnd && e.snapshot.data.breadcrumbs) {
        this.breadcrumbs = e.snapshot.data.breadcrumbs;
      }
    });
  }

}
