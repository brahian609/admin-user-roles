import angular from 'angular';

let constantsModule = angular.module('app.constants', []);

constantsModule.constant('API_URL', 'http://192.168.80.13:3000');
//constantsModule.constant('API_URL', 'http://localhost:3000');

export default constantsModule;