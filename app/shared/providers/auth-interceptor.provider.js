class AuthInterceptorProvider {
    constructor() {}
}

AuthInterceptorProvider.prototype.$get = ['AuthTokenProvider', function (AuthTokenProvider) {
    return {
        //so we'll have 'request' and it will be 'addToken'.
        request: addToken
    };

    function addToken(config) {

        let token = AuthTokenProvider.getToken();
        //  Now if there is a token, so if the user is authenticated.
        if (token) {
            // then we're going to add this to a header on this config object,
            config.headers = config.headers || {};
            //console.log('----authInterceptor----');
            //console.log(config);
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    }

}];

export default AuthInterceptorProvider;