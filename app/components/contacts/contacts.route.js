contactsRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function contactsRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app.contacts', {
            url: '/contactos',
            controller: 'ContactsController',
            controllerAs: '$ctrl',
            templateUrl: 'components/contacts/contacts.html',
            data: {
                requiresLogin: true
            }
        })
        .state('app.contacts.form', {
            url: '/create',
            controller: 'ContactsFormController',
            controllerAs: '$ctrl',
            templateUrl: 'components/contacts/contacts-form/contacts-form.html'
        });
}

export default contactsRoutes;