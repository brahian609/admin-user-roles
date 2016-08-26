errorsRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function errorsRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app.404', {
            url: '/404',
            controller: 'ErrorsController',
            controllerAs: '$ctrl',
            templateUrl: 'components/errors/errors-template/404.html'
        });
}

export default errorsRoutes;