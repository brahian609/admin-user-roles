appRun.$inject = ['$state', '$rootScope', 'AuthTokenProvider', 'jwtHelper', 'BaseService'];

function appRun($state, $rootScope, AuthTokenProvider, jwtHelper, BaseService) {
    'use strict';

    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {

        var module = toState.name.split('.')[1];
        /*console.log('module');
        console.log(module);*/

        if (toState.data && toState.data.requiresLogin) {
            let token = AuthTokenProvider.getToken();

            if (!token || jwtHelper.isTokenExpired(token) === true) {
                event.preventDefault();
                $state.go('login');
            }

            var tokenPayLoad = jwtHelper.decodeToken(token),
                date = jwtHelper.getTokenExpirationDate(token),
                exp = jwtHelper.isTokenExpired(token);

            /*console.log('tokenPayLoad');
            console.log(tokenPayLoad, date, exp);*/

            $rootScope.crm_modules = tokenPayLoad.crm_modules;

            if(BaseService.check_navigation(module, tokenPayLoad.crm_modules) === false && module !== 'home'){
                event.preventDefault();
                $state.go('app.404');
            }

        }

    });

}

export default appRun;