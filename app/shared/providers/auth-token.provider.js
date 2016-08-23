class AuthTokenProvider {
    constructor() {}
}

AuthTokenProvider.prototype.$get = ['$window', '$q', function ($window, $q) {
    let store = $window.localStorage,
        key = 'auth-token';

    return {
        getToken,
        setToken
    };

    function getToken() {
        return store.getItem(key);
    }

    function setToken(token) {
        return $q((resolve, reject) => {
            if (token) {
                store.setItem(key, token);
                resolve('Token Generated');
            } else {
                store.removeItem(key);
                resolve('Token Removed');
            }
        });

    }

}];

export default AuthTokenProvider;