import { Injectable } from '@angular/core';

@Injectable()
export class SidenavService {

  private _isOpened: boolean = false;

  constructor() {}

  open(open = true) {
    this._isOpened = open;
  }

  close(close = true) {
    this._isOpened = !close;
  }

  toggle() {
    this._isOpened = !this._isOpened;
  }

  get isOpened(): boolean { return this._isOpened; }

}
