class LoginService {

    constructor($http, API_URL, $q, AuthTokenProvider){
        this.$http = $http;
        this.API_URL = API_URL;
        this.$q = $q;
        this.AuthTokenProvider = AuthTokenProvider;
    }

    login(user) {

        return this.$q((resolve, reject) => {
            this.$http({
                url: `${this.API_URL}/authenticate/create`,
                method: 'POST',
                data: {
                    user
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(({data}) => {
                this.AuthTokenProvider.setToken(data.request_token).then(response => {
                    resolve(data);
                });
            }, (error) => {
                reject(error);
            });
        });

    }

}

LoginService.$inject = ['$http', 'API_URL', '$q', 'AuthTokenProvider'];

export default LoginService;