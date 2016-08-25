leadsRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function leadsRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app.leads', {
            url: '/prospectos',
            controller: 'LeadsController',
            controllerAs: '$ctrl',
            templateUrl: 'components/leads/leads.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.leads.form', {
            url: '/create',
            controller: 'LeadsFormController',
            controllerAs: '$ctrl',
            templateUrl: 'components/leads/leads-form/leads-form.html'
        });
}

export default leadsRoutes;