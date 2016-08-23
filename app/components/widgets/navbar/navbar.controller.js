class navbarController {

    constructor($state, AuthTokenProvider){
        this.$state = $state;
        this.AuthTokenProvider = AuthTokenProvider;
    }

    logout() {
        this.AuthTokenProvider.setToken().then(response => {
            this.$state.go('login');
        });
    }

}

navbarController.$inject = ['$state', 'AuthTokenProvider'];

export default navbarController;