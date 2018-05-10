import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { BreadcrumbProvider } from "../../providers/breadcrumb";

import { Breadcrumb } from "../../models/breadcrumb";

import { CATEGORIES } from "../../mocks/categories";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {

  constructor(private breadcrumbProvider: BreadcrumbProvider, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.breadcrumbProvider.addItem(new Breadcrumb(CATEGORIES.get(this.route.snapshot.params.name), this.router.url));
  }

}
