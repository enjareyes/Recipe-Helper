import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    public isLoginMode = true;
    public loading = false;
    public error: string = null;

    constructor(
        private authService: AuthService,
    ) {}

    public onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    public onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }

        this.loading = true;

        const email = form.value.email;
        const pw = form.value.password;

        let authObs: Observable<AuthResponseData>;

        if (this.isLoginMode) {
            authObs = this.authService.signIn(email, pw);
        } else {
            authObs = this.authService.signUp(email, pw);
        }

        authObs.subscribe(resData => {
            this.loading = false;
        },
        errorMsg => {
            this.loading = false;
            this.error = errorMsg;
        });

        form.reset();
    }

}
