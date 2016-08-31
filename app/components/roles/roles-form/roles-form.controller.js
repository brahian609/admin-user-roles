class RolesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        this.role = {};
        this.getProfiles();
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

    getProfiles(){
        this.BaseService.request(
            {
                endpoint: `profiles`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);

            var obj = {};
            this.profiles =  [
                { text: 'Tag1' },
                { text: 'Tag2' },
                { text: 'Tag3' }
            ];
            /*data.forEach((item) => {
                //obj.id = item.id;
                obj.text = item.name;
                this.profiles = [...this.profiles, obj];
            });
            console.log('this.profiles');
            console.log(this.profiles);*/
        });
    }

    update(){
        console.log("update");
    }

}

RolesFormController.$inject = ['$state', 'BaseService'];

export default RolesFormController;