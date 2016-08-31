usersRoutes.$inject = ['$stateProvider'];

function usersRoutes($stateProvider) {
    'use strict';

    $stateProvider
        .state('app.user', {
            url: '/usuarios',
            controller: 'UsersController',
            controllerAs: '$ctrl',
            templateUrl: 'components/users/users.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.user.form', {
            url: '/create',
            template: '<users-form></users-form>'
        });
}

export default usersRoutes;