import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from "@angular/material";

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule],
  exports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule],
})
export class AppAngularMaterialModule { }
