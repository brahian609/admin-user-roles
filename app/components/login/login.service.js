class LoginService {

    constructor($http, API_URL, $q, AuthTokenService){
        this.$http = $http;
        this.API_URL = API_URL;
        this.$q = $q;
        this.AuthTokenService = AuthTokenService;
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
                this.AuthTokenService.setToken(data.request_token).then(response => {
                    resolve(data);
                });
            }, (error) => {
                console.log('--- error ---');
                console.log(error);
                reject(error);
            });
        });

    }

}

LoginService.$inject = ['$http', 'API_URL', '$q', 'AuthTokenService'];

export default LoginService;