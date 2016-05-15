import {Page, NavController, Alert} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {QuizerService} from "../../services/quizer";
import {DetailsPage} from "../details/details";

@Page({
    templateUrl: 'build/pages/barcode/barcode.html',
    providers: [QuizerService]
})
export class BarcodePage {
    public device;
    private quiz;

    constructor(private nav: NavController, private quizer: QuizerService) {
    }

    scan() {
        BarcodeScanner.scan().then((barcodeData) => {
            this.nav.present(Alert.create({
                title: "Wynik skanowania",
                subTitle: 'Link: ' + barcodeData.text,
                buttons: [
                    {
                        text: 'Anuluj',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Pobierz Quiz',
                        handler: () => {
                            this.quizer.getQuiz(barcodeData.text).subscribe(
                                data => {
                                    this.quiz = data.json();
                                    this.goToDetails(this.quiz.quiz);
                                },
                                err => {
                                    let alert = Alert.create({
                                        title: 'Bład',
                                        subTitle: 'Błedny link:' + err.toString(),
                                        buttons: ['Anuluj']
                                    });
                                    this.nav.present(alert);
                                },
                                () => console.log('getRepos completed')
                            );
                        }
                    }
                ]
            }));
        }, (error) => {
            this.nav.present(Alert.create({
                title: "Attention!",
                subTitle: error,
                buttons: ["Close"]
            }));
        });
    }

    goToDetails(quiz) {
        //noinspection TypeScriptValidateTypes
        this.nav.push(DetailsPage, { quiz: quiz });
    }
}