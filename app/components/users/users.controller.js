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

    delete(id){
        this.BaseService.request(
            {
                endpoint: `users/${id}`,
                method: 'DELETE'
            }
        ).then(response => {
            this.$state.reload();
        });
    }

}

UsersController.$inject = ['BaseService', '$state'];

export default UsersController