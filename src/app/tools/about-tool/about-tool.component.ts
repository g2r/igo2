import { Component } from '@angular/core';

import { Register } from '@igo2/igo2';


@Register({
  name: 'about',
  title: 'about',
  icon: 'perm_contact_calendar'
})
@Component({
  selector: 'app-about-tool',
  templateUrl: './about-tool.component.html',
  styleUrls: ['./about-tool.component.styl']
})
export class AboutToolComponent {

  constructor() { }

}
