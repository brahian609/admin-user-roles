rolesRoutes.$inject = ['$stateProvider'];

function rolesRoutes($stateProvider) {
    'use strict';

    $stateProvider
        .state('app.role', {
            url: '/roles',
            controller: 'RolesController',
            controllerAs: 'ctrl',
            templateUrl: 'components/roles/roles.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.role.form', {
            url: '/create',
            controller: 'RolesFormController',
            controllerAs: 'ctrlForm',
            templateUrl: 'components/roles/roles-form/roles-form.html'
        });
}

export default rolesRoutes;