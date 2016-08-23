class navbarController {

    constructor($state, AuthTokenService){
        this.$state = $state;
        this.AuthTokenService = AuthTokenService;
    }

    logout() {
        this.AuthTokenService.setToken().then(response => {
            this.$state.go('login');
        });
    }

}

navbarController.$inject = ['$state', 'AuthTokenService'];

export default navbarController;