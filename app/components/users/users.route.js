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
        .state('app.user.create', {
            url: '/create',
            template: '<users-form user-data="{}"></users-form>'
        })
        .state('app.user.update', {
            url: '/:id/actualizar',
            controller: ['userData', function (userData) {
                let self = this;
                self.userData = userData;
            }],
            controllerAs: '$ctrl',
            template: `<users-form user-data="$ctrl.userData"></users-form>`,
            data: {
                requiresLogin: true
            },
            resolve: {
                userData: ['$q', '$stateParams', 'BaseService', ($q, $stateParams, BaseService) => {
                    return $q((resolve, reject) => {
                        BaseService.request(
                            {
                                endpoint: `users/${$stateParams.id}?include=profiles`,
                                method: 'GET'
                            }
                        ).then(({data}) => {
                            resolve(data);
                        });
                    });
                }]
            }
        });
}

export default usersRoutes;