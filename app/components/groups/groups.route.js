groupsRoutes.$inject = ['$stateProvider'];

function groupsRoutes($stateProvider) {
    'use strict';

    $stateProvider
        .state('app.group', {
            url: '/grupos',
            controller: 'GroupsController',
            controllerAs: '$ctrl',
            templateUrl: 'components/groups/groups.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.group.create', {
            url: '/create',
            template: '<groups-form group-data="{}"></groups-form>'
        })
        .state('app.group.update', {
            url: '/:id/actualizar',
            controller: ['groupData', function (groupData) {
                let self = this;
                self.groupData = groupData;
            }],
            controllerAs: '$ctrl',
            template: `<groups-form group-data="$ctrl.groupData"></groups-form>`,
            data: {
                requiresLogin: true
            },
            resolve: {
                groupData: ['$q', '$stateParams', 'BaseService', ($q, $stateParams, BaseService) => {
                    return $q((resolve, reject) => {
                        BaseService.request(
                            {
                                endpoint: `groups/${$stateParams.id}`,
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

export default groupsRoutes;