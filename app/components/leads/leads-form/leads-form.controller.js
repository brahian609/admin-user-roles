class LeadsFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
    }

    $onInit(){

        this.action = this.BaseService.parseRoute(this.$state.current.name, 'action');

        switch (this.action) {
            case 'create':
                this.BaseService.getUserId().then(user_id => {
                    this.loadAssgineds(user_id);
                });
                this.attributes = this.leadData;
                break;
            case 'update':
                this.loadAssgineds(this.leadData.relationships.user.data.id);
                this.attributes = this.leadData.attributes;
                this.attributes.identification = parseInt(this.leadData.attributes.identification);
                break;
        }
    }

    loadAssgineds(user_select){
        this.BaseService.request(
            {
                endpoint: `users`,
                method: 'GET'
            }
        ).then(({data}) => {
            this.assigned = data;

            let assigned_select = data.filter((item) => {
                return item.id == user_select;
            });
            this.assigned_to = assigned_select[0].id;
        });
    }

    prepareData() {
        let data = {
            data: {
                type: 'leads',
                attributes: this.attributes,
                relationships: {
                    user: {
                        data: {
                            type: 'users',
                            id: this.assigned_to
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
                endpoint: `leads`,
                method: 'POST',
                //dataName: 'data',
                dataObj: data
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.lead');
        });

    }

    update(){
        let data = this.prepareData();

        this.BaseService.request(
            {
                endpoint: `leads/${this.leadData.id}`,
                method: 'PUT',
                dataObj: data
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.lead');
        });
    }

}

LeadsFormController.$inject = ['$state', 'BaseService'];

export default LeadsFormController;