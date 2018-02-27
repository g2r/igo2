import { Component, Input } from '@angular/core';

import { Tool, ToolService } from '@igo2/igo2';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.styl']
})
export class SidenavComponent {

  @Input()
  get opened(): boolean { return this._opened; }
  set opened(value: boolean) {
    this._opened = value;
  }
  private _opened: boolean;


  @Input()
  get tool(): Tool { return this._tool; }
  set tool(value: Tool) {
    this._tool = value;
  }
  private _tool: Tool;


  constructor(public toolService: ToolService) { }

}
