import { Component } from '@angular/core';

import { Register } from '@igo2/igo2';


@Register({
  name: 'contact',
  title: 'contact',
  icon: 'email'
})
@Component({
  selector: 'app-contact-tool',
  templateUrl: './contact-tool.component.html',
  styleUrls: ['./contact-tool.component.styl']
})
export class ContactToolComponent {

  constructor() { }

}
