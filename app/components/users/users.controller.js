class UsersController {

    constructor(BaseService, $state) {
        this.BaseService = BaseService;
        this.$state = $state;
        this.getUsers();
    }

    getUsers(){
        this.BaseService.request(
            {
                endpoint: `users`,
                method: 'GET'
            }
        ).then(({data}) => {
            this.users = data;
        });
    }

    getUser(id){
        this.BaseService.request(
            {
                endpoint: `users/${id}.json`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
        });
    }

    delete(id){
        this.BaseService.request(
            {
                endpoint: `users/${id}.json`,
                method: 'DELETE'
            }
        ).then(response => {
            this.$state.reload();
        });
    }

}

UsersController.$inject = ['BaseService', '$state'];

export default UsersController