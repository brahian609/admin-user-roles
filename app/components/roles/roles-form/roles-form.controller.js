class RolesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
    }

    $onInit(){

        this.members = [];
        this.getProfiles();
        this.action = this.BaseService.parseRoute(this.$state.current.name, 'action');

        switch (this.action) {
            case 'create':
                this.profilesArr = [];
                this.attributes = this.roleData;
                break;
            case 'update':
                console.log('this.roleData');
                console.log(this.roleData);
                this.attributes = this.roleData.data.attributes;
                this.profilesArr = this.roleData.data.relationships.profiles.data;
                this.roleData.included.forEach((item) => {
                    this.members = [...this.members, {id: item.id, text: item.attributes.name}];
                });
                break;
        }
    }

    getProfiles(){
        this.BaseService.request(
            {
                endpoint: `profiles`,
                method: 'GET'
            }
        ).then(({data}) => {
            this.profiles =  [];
            data.forEach((item) => {
                this.profiles = [...this.profiles, {id: item.id, text: item.attributes.name}];
            });
        });
    }

    addProfile(dataProfile){
        let profile = {
            type: 'profiles',
            id: dataProfile.id
        };
        this.profilesArr = [...this.profilesArr, profile];
    }

    removeProfile(dataProfile){
        this.profilesArr.forEach((item, index) => {
            if(dataProfile.id == item.id){
                this.profilesArr = this.profilesArr.slice(0,index).concat(this.profilesArr.slice(index+1))
            }
        });
    }

    prepareData() {
        let data = {
            data: {
                type: 'roles',
                attributes: this.attributes,
                relationships: {
                    profiles: {
                        data: this.profilesArr
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
                endpoint: `roles`,
                method: 'POST',
                dataObj: data
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.role');
        });
    }

    update(){
        let data = this.prepareData();

        this.BaseService.request(
            {
                endpoint: `roles/${this.roleData.data.id}`,
                method: 'PUT',
                dataObj: data
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.role');
        });
    }

}

RolesFormController.$inject = ['$state', 'BaseService'];

export default RolesFormController;