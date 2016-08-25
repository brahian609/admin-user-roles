class LoginController {

    constructor(LoginService, $state, $stateParams, $window) {
        this.LoginService = LoginService;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$window = $window;
        this.user = {};
        this.errorText = '';
        
        console.log('$stateParams.nit');
        console.log($stateParams.nit);

        this.url = `http://${$stateParams.nit}.tenant.me:3000`;

    }

    login() {
        this.LoginService.login(this.user, this.url).then((response) => {
            let store = this.$window.localStorage,
                key = 'tenant-url';
            store.setItem(key, this.url);
            this.$state.go('app.home');
        }).catch(error => {
            this.errorText = error.data.error;
        });
    }

}

LoginController.$inject = ['LoginService', '$state', '$stateParams', '$window'];

export default LoginController;
