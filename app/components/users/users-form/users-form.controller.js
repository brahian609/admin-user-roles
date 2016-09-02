class UsersFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        this.user = {};
        this.getRoles();
    }

    getRoles(){

        this.BaseService.request(
            {
                endpoint: `roles`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.roles = data;
            this.user.role_id = data[0].id;
        });

    }

    create(){

        this.BaseService.request(
            {
                endpoint: `users`,
                method: 'POST',
                dataName: 'user',
                dataObj: this.user
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.user');
        });
    }

    update(){
        console.log("update");
    }

}

UsersFormController.$inject = ['$state', 'BaseService'];

export default UsersFormController;