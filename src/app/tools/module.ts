import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared';

import { AboutToolComponent } from './about-tool';
import { ContactToolComponent } from './contact-tool';

import { AlerteMeteoToolComponent } from './alerte-meteo-tool';
import { RisqueInondationToolComponent } from './risque-inondation-tool';
import { HistoriqueInondationToolComponent } from './historique-inondation-tool';
import { ProprioToolComponent } from './proprio-tool';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AlerteMeteoToolComponent,
    HistoriqueInondationToolComponent,
    RisqueInondationToolComponent,
    ProprioToolComponent,

    AboutToolComponent,
    ContactToolComponent
  ],
  exports: [
    AlerteMeteoToolComponent,
    HistoriqueInondationToolComponent,
    RisqueInondationToolComponent,
    ProprioToolComponent,

    AboutToolComponent,
    ContactToolComponent
  ],
  entryComponents: [
    AlerteMeteoToolComponent,
    HistoriqueInondationToolComponent,
    RisqueInondationToolComponent,
    ProprioToolComponent,

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
