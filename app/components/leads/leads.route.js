leadsRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function leadsRoutes($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
        .state('app.lead', {
            url: '/prospectos',
            controller: 'LeadsController',
            controllerAs: '$ctrl',
            templateUrl: 'components/leads/leads.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.lead.create', {
            url: '/crear',
            template: `<leads-form lead-data="{}"></leads-form>`
        });
}

export default leadsRoutes;