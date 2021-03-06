import {Page, NavController} from 'ionic-angular';
import {QuizerService} from '../../services/quizer';
import {DetailsPage} from '../details/details';
import {SavedQuizesPage} from "../saved/saved";

@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [QuizerService]
})
export class HomePage {
    public foundQuizes;
    public title;
    private savedQuizesPage: SavedQuizesPage;

    constructor(private quizer: QuizerService,
                private nav: NavController) {
    }

    getQuizes() {
        this.quizer.getQuizes().subscribe(
            data => {
                this.foundQuizes = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }
    
    goToDetails(quiz) {
        //noinspection TypeScriptValidateTypes
        this.nav.push(DetailsPage, { quiz: quiz });
    }

    goToSaved() {
        //noinspection TypeScriptValidateTypes
        this.nav.setRoot(SavedQuizesPage);
    }
}