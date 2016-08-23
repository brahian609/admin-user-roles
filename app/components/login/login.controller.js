class LoginController {

    constructor(LoginService, $state) {
        this.LoginService = LoginService;
        this.$state = $state;
        this.user = {};
    }

    login() {
        this.LoginService.login(this.user).then((response) => {
            console.log('response');
            console.log(response);
            this.$state.go('app.roles');
        }, this.errorHandler);
    }

    errorHandler(error) {
        console.log('--- login error ---');
        console.log(error.data);
    }

}

LoginController.$inject = ['LoginService', '$state'];

export default LoginController;
