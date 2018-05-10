import { Injectable } from "@angular/core";

import { Subject } from "rxjs";

import { Breadcrumb } from "../models/breadcrumb";

@Injectable()
export class BreadcrumbProvider {

  _addItem = new Subject<Breadcrumb>();

  constructor() { }

  addItem(breadcrumb: Breadcrumb): void {
    this._addItem.next(breadcrumb);
  }

}
