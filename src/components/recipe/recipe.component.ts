import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { BreadcrumbProvider } from "../../providers/breadcrumb";
import { RecipeProvider } from "../../providers/recipe";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
  providers: [RecipeProvider]
})
export class RecipeComponent implements OnInit {

  constructor(private breadcrumbProvider: BreadcrumbProvider,
              private recipeProvider: RecipeProvider,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeProvider.getNameByUrl(this.route.snapshot.params.name)
      .then(name => this.breadcrumbProvider.addItem(name));
  }

}
