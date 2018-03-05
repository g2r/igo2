import { Component, OnInit } from '@angular/core';

import { Register, ContextService } from '@igo2/igo2';

import { SidenavService } from '../../pages/portal/sidenav';

@Register({
  name: 'alerteMeteo',
  title: 'alerteMeteo',
  iconImage: './assets/images/contexts/Alerte-meteo.png'
})
@Component({
  selector: 'app-alerte-meteo-tool',
  templateUrl: './alerte-meteo-tool.component.html',
  styleUrls: ['./alerte-meteo-tool.component.styl']
})

export class AlerteMeteoToolComponent implements OnInit {

  constructor(
    public contextService: ContextService,
    public sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.sidenavService.close();
    this.contextService.loadContext('alerte');
  }
}
