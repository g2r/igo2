import { Component } from '@angular/core';

import { LanguageService, ConfigService, AuthOptions } from '@igo2/igo2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  public authConfig: AuthOptions;

  public messageCenterOptions = {
    timeOut: 0
  };

  constructor(protected languageService: LanguageService,
              private configService: ConfigService) {

    this.authConfig = this.configService.getConfig('auth');
  }
}
