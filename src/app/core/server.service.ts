import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    postData(data: {}): Observable<{}> {
        return this.http.post("https://seal-deal-project.firebaseio.com/data.json", data);
    }

    getData (): Observable<{}> {
        return this.http.get("https://seal-deal-project.firebaseio.com/data.json");
    }

}