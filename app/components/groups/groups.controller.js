class GroupsController {

    constructor(BaseService, $state) {
        this.BaseService = BaseService;
        this.$state = $state;
    }

    $onInit(){
        this.getGroups();
    }

    getGroups(){
        this.BaseService.request(
            {
                endpoint: `groups`,
                method: 'GET'
            }
        ).then(({data}) => {
            this.groups = data;
        });
    }

    prepareUpdate(id){
        this.$state.go('app.group.update', {id});
    }

    delete(id){

        this.BaseService.request(
            {
                endpoint: `groups/${id}.json`,
                method: 'DELETE'
            }
        ).then(response => {
            console.log('response');
            console.log(response);
            this.$state.reload();
        });

    }

}

GroupsController.$inject = ['BaseService', '$state'];

export default GroupsController