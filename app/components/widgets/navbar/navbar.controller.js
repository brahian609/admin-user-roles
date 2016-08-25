class navbarController {

    constructor($state, AuthTokenProvider, $window){
        this.$state = $state;
        this.AuthTokenProvider = AuthTokenProvider;
        this.$window = $window;
    }

    logout() {

        let store = this.$window.localStorage;
        let url = store.getItem('tenant-url');

        var nit = url.split('http://')[1].split('.')[0];


        this.AuthTokenProvider.setToken().then(response => {
            store.removeItem('tenant-url');
            this.$state.go('login', {nit: nit});
        });
    }

}

navbarController.$inject = ['$state', 'AuthTokenProvider', '$window'];

export default navbarController;