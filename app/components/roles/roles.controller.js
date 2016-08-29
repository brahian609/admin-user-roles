class RolesController {

    constructor(BaseService) {
        this.BaseService = BaseService;
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

    getRole(id){

        this.BaseService.request(
            {
                endpoint: `role/${id}.json`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
        });

    }

}

RolesController.$inject = ['BaseService'];

export default RolesController