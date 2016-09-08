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
        })
        .state('app.lead.update', {
            url: '/:id/actualizar',
            controller: ['leadData', function (leadData) {
                let self = this;
                self.leadData = leadData;
            }],
            controllerAs: '$ctrl',
            template: `<leads-form lead-data="$ctrl.leadData"></leads-form>`,
            data: {
                requiresLogin: true
            },
            resolve: {
                leadData: ['$q', '$stateParams', 'BaseService', ($q, $stateParams, BaseService) => {
                    return $q((resolve, reject) => {
                        BaseService.request(
                            {
                                endpoint: `leads/${$stateParams.id}.json`,
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

export default leadsRoutes;