import { Component, OnInit } from '@angular/core';

import { Register, ContextService } from '@igo2/igo2';

import { SidenavService } from '../../pages/portal/sidenav';

@Register({
  name: 'risqueInondation',
  title: 'risqueInondation',
  iconImage: './assets/images/contexts/Risque-inondation.png'
})
@Component({
  selector: 'app-risque-inondation-tool',
  templateUrl: './risque-inondation-tool.component.html',
  styleUrls: ['./risque-inondation-tool.component.styl']
})

export class RisqueInondationToolComponent implements OnInit {

  constructor(
    public contextService: ContextService,
    public sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.sidenavService.close();
    this.contextService.loadContext('_default');
  }
}
