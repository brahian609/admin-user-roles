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
            template: '<roles-form role-data="{}"></roles-form>'
        })
        .state('app.role.update', {
            url: '/:id/actualizar',
            controller: ['roleData', function (roleData) {
                let self = this;
                self.roleData = roleData;
            }],
            controllerAs: '$ctrl',
            template: `<roles-form role-data="$ctrl.roleData"></roles-form>`,
            data: {
                requiresLogin: true
            },
            resolve: {
                roleData: ['$q', '$stateParams', 'BaseService', ($q, $stateParams, BaseService) => {
                    return $q((resolve, reject) => {
                        BaseService.request(
                            {
                                endpoint: `roles/${$stateParams.id}?include=profiles`,
                                method: 'GET'
                            }
                        ).then(data => {
                            resolve(data);
                        });
                    });
                }]
            }
        });
}

export default rolesRoutes;