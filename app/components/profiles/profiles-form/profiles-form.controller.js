class ProfilesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        this.profile = {};

        this.modules = [
            {module: 'lead', name: 'Prospectos'},
            {module: 'account', name: 'Cuentas'}
        ];

        this.permissions = ['show', 'create', 'update', 'delete'];
        this.permission_module = {};

        this.modules.forEach((item) =>{
            this.permission_module[item.module] = this.permissions;
            this.checkPermission(item.module, true);
        });

    }

    allPermissionModules(value){

        if(value === true){
            this.modules.forEach((item) =>{
                this.permission_module[item.module] = this.permissions;
                this.checkPermission(item.module, true);
            });
        }else{
            this.modules.forEach((item) =>{
                this.permission_module[item.module] = [];
                this.checkPermission(item.module, false);
            });
        }

    }

    allPermissionAction(action, value){

        if(value === true){
            this.modules.forEach((item) =>{
                this.addPermission(item.module, action);
                this.checkPermission(item.module, true, action)
            });
        }else{
            this.modules.forEach((item) =>{
                this.removePermission(item.module, action);
                this.checkPermission(item.module, false, action);
            });
        }

    }

    allPermissionModule(module, value){

        if(value === true){
            this.permission_module[module] = this.permissions;
            this.checkPermission(module, true);
        }else{
            this.permission_module[module] = [];
            this.checkPermission(module, false);
        }

    }

    checkPermission(module, checkValue, action = 'all'){

        if(action == 'all'){
            this[module] = {
                module: checkValue,
                show: checkValue,
                create: checkValue,
                update: checkValue,
                delete: checkValue
            };
        }else{
            this[module][action] = checkValue;
        }

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

        this.profile.permissions = this.permission_module;

        console.log('this.profile');
        console.log(this.profile);

        /*this.BaseService.request(
            {
                endpoint: `profiles`,
                method: 'POST',
                dataName: 'profile',
                dataObj: this.profile
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            //this.$state.go('app.role');
        });*/

    }

    update(){
        console.log("update");
    }

}

ProfilesFormController.$inject = ['$state', 'BaseService'];

export default ProfilesFormController;