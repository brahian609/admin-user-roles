rolesRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function rolesRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('roles', {
            url: '/roles',
            controller: 'RolesController',
            controllerAs: 'ctrl',
            templateUrl: 'components/roles/roles.html'
        });
}

export default rolesRoutes;