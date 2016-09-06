rolesRoutes.$inject = ['$stateProvider'];

function rolesRoutes($stateProvider) {
    'use strict';

    $stateProvider
        .state('app.role', {
            url: '/roles',
            controller: 'RolesController',
            controllerAs: '$ctrl',
            templateUrl: 'components/roles/roles.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.role.create', {
            url: '/create',
            template: '<roles-form></roles-form>'
        });
}

export default rolesRoutes;