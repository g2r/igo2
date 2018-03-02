import { Component, Input } from '@angular/core';

@Component({
  selector: 'igo-legend-button',
  templateUrl: './legend-button.component.html',
  styleUrls: ['./legend-button.component.styl']
})
export class LegendButtonComponent {

  @Input()
  get color(): string { return this._color; }
  set color(value: string) {
    this._color = value;
  }
  private _color: string;

  constructor() { }

  showLegend() {
    console.log('showLegend');
  }
}
