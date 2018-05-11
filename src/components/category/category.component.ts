import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { BreadcrumbProvider } from "../../providers/breadcrumb";
import { CategoryProvider } from "../../providers/category";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
  providers: [CategoryProvider]
})
export class CategoryComponent implements OnInit {

  constructor(private breadcrumbProvider: BreadcrumbProvider,
              private categoryProvider: CategoryProvider,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryProvider.getNameByUrl(this.route.snapshot.params.name)
      .then(name => this.breadcrumbProvider.addItem(name));
  }

}
