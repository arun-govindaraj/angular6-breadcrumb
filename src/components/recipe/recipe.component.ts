import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { BreadcrumbProvider } from "../../providers/breadcrumb";

import { Breadcrumb } from "../../models/breadcrumb";

import { RECIPES } from "../../mocks/recipes";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"]
})
export class RecipeComponent implements OnInit {

  constructor(private breadcrumbProvider: BreadcrumbProvider, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.breadcrumbProvider.addItem(new Breadcrumb(RECIPES.get(this.route.snapshot.params.name), this.router.url));
  }

}
