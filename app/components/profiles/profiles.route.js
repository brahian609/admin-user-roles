profilesRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function profilesRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app.profiles', {
            url: '/profiles',
            controller: 'ProfilesController',
            controllerAs: 'ctrl',
            templateUrl: 'components/profiles/profiles.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.profiles.form', {
            url: '/create',
            controller: 'ProfilesFormController',
            controllerAs: 'ctrlForm',
            templateUrl: 'components/profiles/profiles-form/profiles-form.html'
        });
}

export default profilesRoutes;