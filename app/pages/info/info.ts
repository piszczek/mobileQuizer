import {Page, } from 'ionic-angular';
import {Device} from 'ionic-native';

@Page({
    templateUrl: 'build/pages/info/info.html'
})
export class InfoPage {
    public device;

    constructor() {
       this.device = Device.device;

    }
}