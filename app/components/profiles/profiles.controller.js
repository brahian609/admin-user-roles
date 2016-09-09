class ProfilesController {

    constructor(BaseService, $state) {
        this.BaseService = BaseService;
        this.$state = $state;
    }

    $onInit(){
        this.getProfiles();
    }

    getProfiles(){
        this.BaseService.request(
            {
                endpoint: `profiles`,
                method: 'GET'
            }
        ).then(({data}) => {
            this.profiles = data;
        });
    }

    update(id){
        this.$state.go('app.profile.update', {id});
    }

    view(id){
        this.$state.go('app.profile.show', {id});
    }

    delete(id){
        this.BaseService.request(
            {
                endpoint: `profiles/${id}.json`,
                method: 'DELETE'
            }
        ).then(response => {
            console.log('response');
            console.log(response);
            this.$state.reload();
        });
    }


}

ProfilesController.$inject = ['BaseService', '$state'];

export default ProfilesController