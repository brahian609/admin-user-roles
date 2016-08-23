import angular from 'angular';
import libraries from './app.libraries';
import constants from './app.constants';
import components from './components/componentes';
import appComponents from './app.component';
import AuthTokenService from './shared/services/auth-token.service';

angular.module('app', [
    libraries.name,
    constants.name,
    components.name
])
.component('app', appComponents)
.service('AuthTokenService', AuthTokenService);