import { Component, OnInit } from '@angular/core';

import { Register, ContextService } from '@igo2/igo2';

import { SidenavService } from '../../pages/portal/sidenav';

@Register({
  name: 'proprio',
  title: 'proprio',
  icon: 'person'
})
@Component({
  selector: 'app-proprio-tool',
  templateUrl: './proprio-tool.component.html',
  styleUrls: ['./proprio-tool.component.styl']
})

export class ProprioToolComponent implements OnInit {

  constructor(
    public contextService: ContextService,
    public sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.sidenavService.close();
    this.contextService.loadContext('proprio');
  }
}
