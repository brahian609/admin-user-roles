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
            console.log('data');
            console.log(data);
            this.profiles = data;
        });

    }

    getProfile(id){

        this.BaseService.request(
            {
                endpoint: `profiles/${id}.json`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
        });

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