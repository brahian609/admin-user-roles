class LoginController {

    constructor(LoginService, $state) {
        this.LoginService = LoginService;
        this.$state = $state;
        this.user = {};
        this.errorText = '';
    }

    login() {
        this.LoginService.login(this.user).then((response) => {
            this.$state.go('app.home');
        }).catch(error => {
            this.errorText = error.data.error;
        });
    }

}

LoginController.$inject = ['LoginService', '$state'];

export default LoginController;
