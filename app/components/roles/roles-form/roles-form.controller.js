class RolesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        this.role = {};
        this.privileges = [];
        this.getProfiles();
    }

    create(){
        
        this.role.privileges = this.privileges;

        console.log('this.role');
        console.log(this.role);
        
        /*this.BaseService.request(
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
        });*/
    }

    getProfiles(){
        this.BaseService.request(
            {
                endpoint: `profiles`,
                method: 'GET'
            }
        ).then(({data}) => {
            this.profiles =  [];
            data.forEach((item) => {
                this.profiles = [...this.profiles, {id: item.id, text: item.name}];
            });
        });
    }

    update(){
        console.log("update");
    }

}

RolesFormController.$inject = ['$state', 'BaseService'];

export default RolesFormController;