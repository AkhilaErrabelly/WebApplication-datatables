import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Constants } from './Constants';

@Injectable()
export class AuthService {
    isAuthenticated: boolean = false;
    constructor(private http: Http) { }

    authenticatenow(usercreds) {
        var headers = new Headers();
        var creds = 'username=' + usercreds.username + '&password=' + usercreds.password;
        //var url = Constants.VALIDATE_USER;
        var url = 'http://173.162.40.250/HEDIS/HEDISAPI' + '/ValidateUser';
        // todo: need to test this functionality with hardcoded data(if server endpoint is not avaible) and actual endpoint
        
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        /** return new Promise((resolve) => {
            this.http.post(url, creds, { headers: headers }).subscribe((data) => {
                if (data.json().success) {
                    //window.localStorage.setItem('auth_key', data.json().token);
                    // how to set the remember whether user is logged in? Shall I follow above approach?
                    
                    this.isAuthenticated = true;
                }
                else{
                    console.log("Error occured during authentication api call. Details:  " + JSON.stringify(data));
                }
                //todo: remove true and uncomment below line after verifying api call in network.
                //resolve(this.isAuthenticated);
                resolve(true);
            }
            )
        });
        */
        return new Promise((resolve) => {
            window.localStorage.setItem('auth_key', 'sdfkjdhskfjksdhfskjfshdfkjsdhfk');
            resolve(true);
        });
        
    }
}