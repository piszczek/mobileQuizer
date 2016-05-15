import {Page, NavController} from 'ionic-angular';
import {QuizerService} from '../../services/quizer';
import {DetailsPage} from '../details/details';

@Page({
    templateUrl: 'build/pages/saved/saved.html',
    providers: [QuizerService]
})
export class SavedQuizesPage {
    public savedQuizes;
    public title;

    constructor(private quizer: QuizerService,
                private nav: NavController) {
        quizer.getSavedQuizes().then((result) => {
           this.savedQuizes = JSON.parse(result);
        });

    }

    goToDetails(quiz) {
        //noinspection TypeScriptValidateTypes
        this.nav.push(DetailsPage, { quiz: quiz });
    }
}