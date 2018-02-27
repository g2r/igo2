import { Component, OnInit } from '@angular/core';

import { Register, ContextService } from '@igo2/igo2';


@Register({
  name: 'alerteMeteo',
  title: 'alerteMeteo',
  icon: 'warning'
})
@Component({
  selector: 'app-alerte-meteo-tool',
  templateUrl: './alerte-meteo-tool.component.html',
  styleUrls: ['./alerte-meteo-tool.component.styl']
})
export class AlerteMeteoToolComponent  implements OnInit{

  constructor(public contextService: ContextService) {}

  ngOnInit() {
    this.contextService.loadContext('alerte_meteo');
  }
}
