class ProfilesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        
        this.action = this.$state.current.name.split('.')[2];
        this.prepareAction(this.action);

        this.permissions = ['show', 'create', 'update', 'destroy'];
        this.permission_module = {};

    }

    prepareAction(action){
        switch (action) {
            case 'form':
                this.BaseService.getModules().then(data => {
                    this.modules = data;
                    this.setModulesPermission();
                });
                break;
            case 'update':
            case 'show':

                if(action === 'show'){
                    this.isShow = true;
                }

                this.BaseService.getModules().then(data => {
                    this.modules = data;
                    this.setModulesPermission(false);
                    for (var module in this.profileData.permissions){
                        this.checkPermission(module, false);
                        this.permission_module[module] = this.profileData.permissions[module];
                        this.profileData.permissions[module].forEach((permission, index) => {
                            this.checkPermission(module, true, permission);
                        })
                    }
                });
                break;

        }


    }

    setModulesPermission(value = true){
        this.modules.forEach((item) =>{
            if(value === true){
                this.permission_module[item.name] = this.permissions;
                this.checkPermission(item.name, value);
            }else{
                this.permission_module[item.name] = [];
            }
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
        this.profileData.permissions = this.permission_module;

        this.BaseService.request(
            {
                endpoint: `profiles`,
                method: 'POST',
                dataName: 'profile',
                dataObj: this.profileData
            }
        ).then(({data}) => {
            this.$state.go('app.profile');
        });
    }

    update(){
        this.profileData.permissions = this.permission_module;

        this.BaseService.request(
            {
                endpoint: `profiles/${this.profileData.id}`,
                method: 'PUT',
                dataName: 'profile',
                dataObj: this.profileData
            }
        ).then(response => {
            console.log('response');
            console.log(response);
            this.$state.go('app.profile');
        });
    }

}

ProfilesFormController.$inject = ['$state', 'BaseService'];

export default ProfilesFormController;