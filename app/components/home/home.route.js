homeRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function homeRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
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