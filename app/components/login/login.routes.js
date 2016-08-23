loginRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function loginRoutes($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.when("/", "/login");
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            template: `<login class="Login"></login>`
        });

}

export default angular.module('app.login-routes', []).config(loginRoutes);
