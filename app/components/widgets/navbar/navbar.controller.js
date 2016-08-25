class navbarController {

    constructor($state, AuthTokenProvider, $window){
        this.$state = $state;
        this.AuthTokenProvider = AuthTokenProvider;
        this.$window = $window;
    }

    logout() {

        let store = this.$window.localStorage;

        let url = store.getItem('url');

        console.log('url');
        console.log(url);

        this.AuthTokenProvider.setToken().then(response => {
            this.$state.go('login');
        });
    }

}

navbarController.$inject = ['$state', 'AuthTokenProvider', '$window'];

export default navbarController;