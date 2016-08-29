class ProfilesFormController {

    constructor($state){
        this.$state = $state;
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
                show: true
            };

        });

        var action = 'delete';
        this.permission_module['lead'].forEach((e, i) => {
            console.log(e, i);
            if(action == e){
                this.permission_module['lead'] = this.permission_module['lead'].slice(0,i).concat(this.permission_module['lead'].slice(i+1))
            }
        });

        console.log('this.permission_module[lead]');
        console.log(this.permission_module['lead']);

    }

    permission(module, action){
        console.log('permission', module, action);
    }

    create(){
        console.log('this.permission_module');
        console.log(this.permission_module);
    }

    update(){
        console.log("update");
    }

}

ProfilesFormController.$inject = ['$state'];

export default ProfilesFormController;