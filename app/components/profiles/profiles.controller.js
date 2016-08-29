class ProfilesController {

    constructor(BaseService) {
        this.BaseService = BaseService;
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


}

ProfilesController.$inject = ['BaseService'];

export default ProfilesController