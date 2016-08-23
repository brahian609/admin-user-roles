class AuthTokenService {

    constructor($window, $q) {
        this.$window = $window;
        this.$q = $q;

    }

    getToken() {
        let store = this.$window.localStorage,
            key = this.key();
        return store.getItem(key);
    }

    setToken(token) {
        let store = this.$window.localStorage,
            key = this.key();
        return this.$q((resolve, reject) => {
            if (token) {
                store.setItem(key, token);
                resolve('Token Generated');
            } else {
                store.removeItem(key);
                resolve('Token Removed');
            }
        });

    }

    key(){
        return 'auth-token';
    }

}

AuthTokenService.$inject = ['$window', '$q'];

export default AuthTokenService;