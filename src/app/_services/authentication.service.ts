import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../headers';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {

        //create new search params
        let params: URLSearchParams = new URLSearchParams();
        params.append('login', username);
        params.append('password', password);
        params.append('type', 'access-token')

        var data = { checkLogin: true };
  
        let requestOptions = new RequestOptions({ headers: contentHeaders, params: params});

        return this.http.post('http://127.0.0.1:9000/api/login.json?', JSON.stringify(data), requestOptions)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.session) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}