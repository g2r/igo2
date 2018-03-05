import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedModule } from '../../shared';

import { SidenavComponent, SidenavService } from './sidenav';
import { ToastComponent } from './toast';
import { LegendButtonComponent } from './legend';
import { PortalComponent } from './portal.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    PortalComponent
  ],
  declarations: [
    PortalComponent,
    SidenavComponent,
    ToastComponent,
    LegendButtonComponent
  ]
})

export class PortalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PortalModule,
      providers: [
        SidenavService
      ]
    };
  }
}
