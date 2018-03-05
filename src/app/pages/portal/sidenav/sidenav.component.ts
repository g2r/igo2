import { Component, Input } from '@angular/core';

import { Tool, ToolService } from '@igo2/igo2';

import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.styl']
})
export class SidenavComponent {

  @Input()
  get opened(): boolean { return this.sidenavService.isOpened; }
  set opened(value: boolean) {
    this.sidenavService.open(value);
  }

  @Input()
  get tool(): Tool { return this._tool; }
  set tool(value: Tool) {
    this._tool = value;
  }
  private _tool: Tool;


  constructor(
    public toolService: ToolService,
    public sidenavService: SidenavService
  ) { }

}
