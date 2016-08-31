rolesRoutes.$inject = ['$stateProvider'];

function rolesRoutes($stateProvider) {
    'use strict';

    $stateProvider
        .state('app.role', {
            url: '/roles',
            template: '<roles-form></roles-form>',
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