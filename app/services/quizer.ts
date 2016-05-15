import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {LocalStorage,Storage} from "ionic-angular/index";

@Injectable()
export class QuizerService {
    protected storage: Storage;
    constructor(private http: Http) {
        this.storage = new Storage(LocalStorage);
    }

    getQuizes() {
        let repos = this.http.get(`http://v-ie.uek.krakow.pl/~s174644/app_dev.php/api/v1/quizes.json`);

        return repos;
    }

    getQuiz(link) {
        let repos = this.http.get(link);

        return repos;
    }
    
    getDetails(repo) {
        //let headers = new Headers();
        //headers.append('Accept','application/vnd.github.VERSION.html');
        
        //return this.http.get(`${repo.url}/readme`, { headers: headers });
    }
    searchQuizes(title: string) {
        let quizes = this.http.get(`http://quizer.loc/app_dev.php/api/v1/quizes.json?title=` + title);

        return quizes;
    }

    getSavedQuizes() {
        return this.storage.get('quizes');
    }
}