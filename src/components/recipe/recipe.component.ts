import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { BreadcrumbProvider } from "../../providers/breadcrumb";
import { RecipeProvider } from "../../providers/recipe";

import { Breadcrumb } from "../../models/breadcrumb";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
  providers: [RecipeProvider]
})
export class RecipeComponent implements OnInit {

  constructor(private breadcrumbProvider: BreadcrumbProvider,
              private recipeProvider: RecipeProvider,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.recipeProvider.getNameByUrl(this.route.snapshot.params.name)
      .then(name => this.breadcrumbProvider.addItem(new Breadcrumb(name, this.router.url)));
  }

}
