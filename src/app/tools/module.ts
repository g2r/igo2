import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared';

import { AboutToolComponent } from './about-tool';
import { ContactToolComponent } from './contact-tool';

import { AlerteMeteoToolComponent } from './alerte-meteo-tool';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AlerteMeteoToolComponent,
    AboutToolComponent,
    ContactToolComponent
  ],
  exports: [
    AlerteMeteoToolComponent,
    AboutToolComponent,
    ContactToolComponent
  ],
  entryComponents: [
    AlerteMeteoToolComponent,
    AboutToolComponent,
    ContactToolComponent
  ]
})

export class AppToolModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppToolModule,
      providers: []
    };
  }
}
