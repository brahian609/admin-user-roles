appRun.$inject = ['$state', '$rootScope', 'AuthTokenProvider', 'jwtHelper'];

function appRun($state, $rootScope, AuthTokenProvider, jwtHelper) {
    'use strict';

    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {

        var module = toState.name.split('.')[1];
        console.log('module');
        console.log(module);

        if (toState.data && toState.data.requiresLogin) {
            let token = AuthTokenProvider.getToken();

            /*var tokenPayLoad = jwtHelper.decodeToken(token);
            var date = jwtHelper.getTokenExpirationDate(token);
            var exp = jwtHelper.isTokenExpired(token);

            console.log('tokenPayLoad');
            console.log(tokenPayLoad, date, exp);

            $rootScope.crm_modules = tokenPayLoad.crm_modules;*/

            if (!token) {
                event.preventDefault();
                $state.go('login');
            }

            /*if(BaseService.check_navigation(module, tokenPayLoad.crm_modules) === false && module !== 'home'){
                event.preventDefault();
                $state.go('app.home');
            }*/

        }

    });

}

export default appRun;