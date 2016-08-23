rolesRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function rolesRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            template: '<app></app>'
        })
        .state('app.roles', {
            url: '/roles',
            controller: 'RolesController',
            controllerAs: 'ctrl',
            templateUrl: 'components/roles/roles.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.roles.form', {
            url: '/create',
            controller: 'RolesFormController',
            controllerAs: 'ctrlForm',
            templateUrl: 'components/roles/roles-form/roles-form.html'
        });
}

export default rolesRoutes;