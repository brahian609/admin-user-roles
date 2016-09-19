class RolesFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
    }

    $onInit(){

        this.members = [];
        this.assigned =  [];
        this.getAssigned();
        this.action = this.BaseService.parseRoute(this.$state.current.name, 'action');

        switch (this.action) {
            case 'create':
                this.membersGroup = [];
                this.attributes = this.groupData;
                break;
            case 'update':
                this.attributes = this.groupData.data.attributes;
                this.membersGroup = this.groupData.data.relationships.users.data;

                this.groupData.included.forEach((item) => {
                    this.members = [...this.members, {id: item.id, text: item.attributes.username}];
                });
                break;
        }
    }

    getAssigned(){
        this.BaseService.request(
            {
                endpoint: `users`,
                method: 'GET'
            }
        ).then(({data}) => {
            data.forEach((item) => {
                this.assigned = [...this.assigned, {id: item.id, text: item.attributes.username}];
            });
        });
    }

    addMember(dataMember){
        let member = {
            type: 'users',
            id: dataMember.id
        };
        this.membersGroup = [...this.membersGroup, member];
    }

    removeMember(dataMember){
        this.membersGroup.forEach((item, index) => {
            if(dataMember.id == item.id){
                this.membersGroup = this.membersGroup.slice(0,index).concat(this.membersGroup.slice(index+1))
            }
        });
    }

    prepareData() {
        let data = {
            data: {
                type: 'groups',
                attributes: this.attributes,
                relationships: {
                    users: {
                        data: this.membersGroup
                    }
                }
            }
        };
        return data;
    }

    create(){

        let data = this.prepareData();

        console.log('data');
        console.log(data);

        this.BaseService.request(
            {
                endpoint: `groups`,
                method: 'POST',
                dataObj: data
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.group');
        });

    }

    update(){
        let data = this.prepareData();

        this.BaseService.request(
            {
                endpoint: `groups/${this.groupData.data.id}`,
                method: 'PUT',
                dataObj: data
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.group');
        });
    }

}

RolesFormController.$inject = ['$state', 'BaseService'];

export default RolesFormController;