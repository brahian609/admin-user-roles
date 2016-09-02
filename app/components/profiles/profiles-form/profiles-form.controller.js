class ProfilesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        this.profile = {};

        this.get_crm_modules();

        this.permissions = ['show', 'create', 'update', 'destroy'];
        this.permission_module = {};

    }

    get_crm_modules(){
        this.BaseService.request(
            {
                endpoint: `crm_modules`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('crm modules');
            console.log(data);
            this.modules = data;
            this.modules.forEach((item) =>{
                this.permission_module[item.name] = this.permissions;
                this.checkPermission(item.name, true);
            });
        });
    }

    allPermissionModules(value){

        if(value === true){
            this.modules.forEach((item) =>{
                this.permission_module[item.name] = this.permissions;
                this.checkPermission(item.name, true);
            });
        }else{
            this.modules.forEach((item) =>{
                this.permission_module[item.name] = [];
                this.checkPermission(item.name, false);
            });
        }

    }

    allPermissionAction(action, value){

        if(value === true){
            this.modules.forEach((item) =>{
                this.addPermission(item.name, action);
                this.checkPermission(item.name, true, action)
            });
        }else{
            this.modules.forEach((item) =>{
                this.removePermission(item.name, action);
                this.checkPermission(item.name, false, action);
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
                destroy: checkValue
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

       var indexAction = true;
       indexAction = this.permission_module[module].some((item, index) => {
            if(item === action) {
                return true;
            }else{
                return false;
            }
        });

        if(indexAction === false){
            this.permission_module[module] = [...this.permission_module[module], action];
        }

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

        this.BaseService.request(
            {
                endpoint: `profiles`,
                method: 'POST',
                dataName: 'profile',
                dataObj: this.profile
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.profile');
        });

    }

    update(){
        console.log("update");
    }

}

ProfilesFormController.$inject = ['$state', 'BaseService'];

export default ProfilesFormController;