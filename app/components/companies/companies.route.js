companiesRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function companiesRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app.companies', {
            url: '/companies',
            controller: 'CompaniesController',
            controllerAs: '$ctrl',
            templateUrl: 'components/companies/companies.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.companies.form', {
            url: '/create',
            controller: 'CompaniesFormController',
            controllerAs: '$ctrl',
            templateUrl: 'components/companies/companies-form/companies-form.html'
        });
}

export default companiesRoutes;