class RolesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        this.role = {};
    }

    create(){
        this.BaseService.request(
            {
                endpoint: `roles`,
                method: 'POST',
                dataName: 'role',
                dataObj: this.role
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.role');
        });
    }

    update(){
        console.log("update");
    }

}

RolesFormController.$inject = ['$state', 'BaseService'];

export default RolesFormController;