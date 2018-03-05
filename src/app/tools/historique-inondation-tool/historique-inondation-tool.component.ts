import { Component, OnInit } from '@angular/core';

import { Register, ContextService } from '@igo2/igo2';

import { SidenavService } from '../../pages/portal/sidenav';

@Register({
  name: 'historiqueInondation',
  title: 'historiqueInondation',
  iconImage: './assets/images/contexts/Historique-inondation.png'
})
@Component({
  selector: 'app-historique-inondation-tool',
  templateUrl: './historique-inondation-tool.component.html',
  styleUrls: ['./historique-inondation-tool.component.styl']
})

export class HistoriqueInondationToolComponent implements OnInit {

  constructor(
    public contextService: ContextService,
    public sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.sidenavService.close();
    this.contextService.loadContext('_default');
  }
}
