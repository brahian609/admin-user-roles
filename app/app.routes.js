//appRoutes.$inject = ['$httpProvider', '$ocLazyLoadProvider'];
appRoutes.$inject = ['$httpProvider'];

//function appRoutes($httpProvider, $ocLazyLoadProvider) {
function appRoutes($httpProvider) {
    'use strict';

    $httpProvider.interceptors.push('AuthInterceptorProvider');

    /*$ocLazyLoadProvider.config({
        debug: true
    });*/

}

export default appRoutes;