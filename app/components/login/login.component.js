import template from './login.html';
import controller from './login.controller';

let loginComponent = {
    template,
    controller
};

export default angular.module('app.login-component', []).component('login', loginComponent);