import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    idToken: string;
    refreshToken: string;
    email: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(
        private http: HttpClient,
    ) {}

    public signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMSd4vtRkjxDra1edVHlerdGmBBqesDYo',
            {
                email,
                password,
                returnSecureToken: true,
            }
        ).pipe(catchError(errorRes => {
            return this.handleError(errorRes);
        }));
    }

    public signIn(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMSd4vtRkjxDra1edVHlerdGmBBqesDYo',
            {
                email,
                password,
                returnSecureToken: true,
            }
        ).pipe(catchError(errorRes => {
            return this.handleError(errorRes);
        }));
    }

    private handleError(errorRes) {
        let errMsg = 'An unknown error has occured.';

        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errMsg);
        }

        switch (errorRes.error.error.message) {
            case ('INVALID_PASSWORD'):
                errMsg = 'Incorrect password.';
                break;
            case ('EMAIL_NOT_FOUND'):
                errMsg = 'Email not found.';
                break;
            case ('EMAIL_EXISTS'):
                errMsg = 'This email already exists. Try logging in.';
        }

        return throwError(errMsg);
    }
}
