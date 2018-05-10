import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from "@angular/material";

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatListModule],
  exports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatListModule],
})
export class AppAngularMaterialModule { }
