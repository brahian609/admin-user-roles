rolesRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function rolesRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('roles', {
            url: '/roles',
            controller: 'RolesController',
            controllerAs: 'ctrl',
            templateUrl: 'components/roles/roles.html'
        })
        .state('roles.form', {
            url: '/create',
            controller: 'RolesFormController',
            controllerAs: 'ctrlForm',
            templateUrl: 'components/roles/roles-form/roles-form.html'
        });
}

export default rolesRoutes;