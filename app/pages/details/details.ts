import {Page, NavController, NavParams, Alert, Storage, LocalStorage, PageMetadata} from 'ionic-angular';
import {QuizerService} from '../../services/quizer';
import {ArraySortPipe} from "../../pipes/sort";
import {Vibration} from 'ionic-native';

@Page(<PageMetadata>{
    templateUrl: 'build/pages/details/details.html',
    providers: [QuizerService],
    pipes: [ArraySortPipe]
})
export class DetailsPage {
    public readme = '';
    public quiz;
    public check:boolean;
    private local: Storage;

    constructor(private quizer: QuizerService,
                private nav: NavController,
                private navParams: NavParams
    ) {

        this.check = false;
        this.quiz = navParams.get('quiz');
        this.local = new Storage(LocalStorage);
    }

    checkAnswers(){
        this.check = true;
        let corrects: number = 0;

        for (let question of this.quiz.questions) {
            if (question.answer == 'true')
                corrects++;
        }
        Vibration.vibrate(1500);
        let alert = Alert.create({
            title: 'Twój wynik',
            subTitle: 'Poprawnych ' + corrects + '/' + this.quiz.questions.length + ' odpowiedzi',
            buttons: [{
                title: 'OK',
                handler: () => {
                }
            }]
        });

        this.nav.present(alert);

    }

    saveQuiz(){
        this.local.get('quizes').then((result) => {
            if (result) {
                let quizes = JSON.parse(result);
                let exist:boolean = false;
                for (let quiz of quizes) {
                    if (quiz.id == this.quiz.id)
                        exist = true;
                }
                if (!exist) {
                    quizes = quizes.concat(this.quiz);
                    this.local.setJson('quizes', quizes);
                }

            } else {
                this.local.setJson('quizes', [this.quiz]);
            }
        });
    }
}