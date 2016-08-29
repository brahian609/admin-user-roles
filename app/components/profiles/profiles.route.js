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
            url: '/create',
            template: '<profiles-form></profiles-form>'
        });
}

export default profilesRoutes;