import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [{
    title: 'Home',
    url: '/home',
    icon: 'home',
  },
  {
    title: 'List',
    url: '/list',
    icon: 'list',
  }];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate: TranslateService,
  ) {
    this.initializeApp();
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

    this.translateMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  translateMenu() {
    this.translate.get(['LIST.TITLE', 'HOME.TITLE']).subscribe((res: string) => {
      this.appPages = [
        {
          title: res['HOME.TITLE'],
          url: '/home',
          icon: 'home',
        },
        {
          title: res['LIST.TITLE'],
          url: '/list',
          icon: 'list',
        }];
    });
  }

  changeLanguage(selectedLang) {
    this.translate.use(selectedLang);
    this.translateMenu();
  }
}
