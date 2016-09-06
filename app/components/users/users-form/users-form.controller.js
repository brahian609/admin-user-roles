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
            this.$state.go('app.user');
        });
    }

    update(){
        console.log("update");
    }

}

UsersFormController.$inject = ['$state', 'BaseService'];

export default UsersFormController;