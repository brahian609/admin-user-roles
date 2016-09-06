profilesRoutes.$inject = ['$stateProvider'];

function profilesRoutes($stateProvider) {
    'use strict';

    $stateProvider
        .state('app.profile', {
            url: '/profiles',
            controller: 'ProfilesController',
            controllerAs: '$ctrl',
            templateUrl: 'components/profiles/profiles.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.profile.form', {
            url: '/crear',
            template: '<profiles-form profile-data="{}"></profiles-form>',
            data: {
                requiresLogin: true
            }
        })
        .state('app.profile.update', {
            url: '/:id/actualizar',
            controller: ['profileData', function (profileData) {
                let self = this;
                self.profileData = profileData;
            }],
            controllerAs: '$ctrl',
            template: `<profiles-form profile-data="$ctrl.profileData"></profiles-form>`,
            data: {
                requiresLogin: true
            },
            resolve: {
                profileData: ['$q', '$stateParams', 'BaseService', ($q, $stateParams, BaseService) => {
                    return $q((resolve, reject) => {
                        BaseService.request(
                            {
                                endpoint: `profiles/${$stateParams.id}.json`,
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

export default profilesRoutes;