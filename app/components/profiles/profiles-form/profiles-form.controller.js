class ProfilesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        this.profile = [];

        this.modules = [
            {module: 'lead', name: 'Prospectos'},
            {module: 'account', name: 'Cuentas'}
        ];

        this.permissions = ['show', 'create', 'update', 'delete'];
        this.permission_module = {};

        this.modules.forEach((item) =>{
            this.permission_module[item.module] = this.permissions;

            this[item.module] = {
                module: true,
                show: true,
                create: true,
                update: true,
                delete: true
            };

        });

    }

    allPermission(module, value){

        if(value === true){
            this.permission_module[module] = this.permissions;
            this[module] = {
                module: true,
                show: true,
                create: true,
                update: true,
                delete: true
            };
        }else{
            this.permission_module[module] = [];
            this[module] = {
                module: false,
                show: false,
                create: false,
                update: false,
                delete: false
            };
        }

        console.log('this.permission_module[module]');
        console.log(this.permission_module[module]);

    }

    preparePermission(module, action, value){
        if(value === true){
            this.addPermission(module, action);
        }else{
            this.removePermission(module, action);
        }
    }

    addPermission(module, action){
        this.permission_module[module] = [...this.permission_module[module], action];
    }

    removePermission(module, action){
        this.permission_module[module].forEach((item, index) => {
            if(action == item){
                this.permission_module[module] = this.permission_module[module].slice(0,index).concat(this.permission_module[module].slice(index+1))
            }
        });
    }

    create(){
        console.log('this.permission_module');
        console.log(this.permission_module);

        this.BaseService.request(
            {
                endpoint: `profiles`,
                method: 'POST',
                dataName: 'profile',
                dataObj: this.permission_module
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            //this.$state.go('app.role');
        });

    }

    update(){
        console.log("update");
    }

}

ProfilesFormController.$inject = ['$state', 'BaseService'];

export default ProfilesFormController;