homeRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function homeRoutes($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            template: '<app></app>'
        })
        .state('app.home', {
            url: '/home',
            controller: 'HomeController',
            controllerAs: '$ctrl',
            templateUrl: 'components/home/home.html',
            data: {
                requiresLogin: true
            }
        });
}

export default homeRoutes;