class UsersFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;

    }

    $onInit(){
        this.getRoles();
        this.action = this.BaseService.parseRoute(this.$state.current.name, 'action');

        switch (this.action) {
            case 'create':
                this.attributes = this.userData;
                break;
            case 'update':
                this.attributes = this.userData.attributes;
                this.attributes.password = null;
                this.role_id = this.userData.relationships.role.data.id;
                console.log('this.role_id');
                console.log(this.role_id);
                break;
        }
    }

    getRoles(){
        this.BaseService.request(
            {
                endpoint: `roles`,
                method: 'GET'
            }
        ).then(({data}) => {
            this.roles = data;
            this.role_id = data[0].id;
        });
    }

    prepareData() {
        let data = {
            data: {
                type: 'users',
                attributes: this.attributes,
                relationships: {
                    role: {
                        data: {
                            id: this.role_id,
                            type: 'roles'
                        }
                    }
                }
            }
        };
        return data;
    }

    create(){
        let data = this.prepareData();

        this.BaseService.request(
            {
                endpoint: `users`,
                method: 'POST',
                dataObj: data
            }
        ).then(({data}) => {
            this.$state.go('app.user', {}, {reload: true});
        });
    }

    update(){
        let data = this.prepareData();

        this.BaseService.request(
            {
                endpoint: `users/${this.userData.id}`,
                method: 'PUT',
                dataObj: data
            }
        ).then(({data}) => {
            this.$state.go('app.user', {}, {reload: true});
        });
    }

}

UsersFormController.$inject = ['$state', 'BaseService'];

export default UsersFormController;