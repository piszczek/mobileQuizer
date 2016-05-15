import {Page, NavController} from 'ionic-angular';
import {QuizerService} from '../../services/quizer';
import {DetailsPage} from '../details/details';

@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [QuizerService]
})
export class SearchPage {
    public foundQuizes;
    public title;

    constructor(private quizer: QuizerService,
                private nav: NavController) {
    }

    getQuizes() {
        this.quizer.searchQuizes(this.title).subscribe(
            data => {
                this.foundQuizes = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }
    
    goToDetails(quiz) {
        this.nav.push(DetailsPage, { quiz: quiz });
    }
}