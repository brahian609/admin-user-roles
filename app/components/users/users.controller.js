class UsersController {

    constructor(BaseService) {
        this.BaseService = BaseService;
        this.getUsers();
    }

    getUsers(){

        this.BaseService.request(
            {
                endpoint: `users`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
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

}

UsersController.$inject = ['BaseService'];

export default UsersController