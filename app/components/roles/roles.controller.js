class RolesController {

    constructor(BaseService, $state) {
        this.BaseService = BaseService;
        this.$state = $state;
        this.getRoles();
    }

    getRoles(){

        this.BaseService.request(
            {
                endpoint: `roles`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.roles = data;
        });

    }

    delete(id){

        this.BaseService.request(
            {
                endpoint: `roles/${id}`,
                method: 'DELETE'
            }
        ).then(response => {
            console.log('response');
            console.log(response);
            this.$state.reload();
        });

    }

}

RolesController.$inject = ['BaseService', '$state'];

export default RolesController