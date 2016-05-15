import {App, Platform, MenuController, IonicApp, NavController}  from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {SearchPage} from './pages/search/search';
import {AboutPage} from './pages/about/about';
import {SavedQuizesPage} from "./pages/saved/saved";
import {InfoPage} from "./pages/info/info";
import {BarcodePage} from "./pages/barcode/barcode";

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;
  aboutPage: any = AboutPage;
  searchPage: any = SearchPage;
  savedQuizesPage: any = SavedQuizesPage;
  homePage: any = HomePage;
  infoPage: any = InfoPage;
  barcodePage: any = BarcodePage;
  private menu;
  private app;

  constructor(app: IonicApp, menu: MenuController, platform: Platform) {

    this.app = app;
    this.menu = menu;
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }


  openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page;

    // close the menu when clicking a link from the menu
    this.menu.close();
  }
}
