import angular from 'angular';
import LoginService from './login.service';
import loginComponent from './login.component';

let loginModule = angular.module('app.login', [
        loginComponent.name
    ])
    .service('LoginService', LoginService);

export default loginModule;