class LeadsFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
    }

    $onInit(){
        this.attributes = {};
        this.BaseService.getUserId().then(response => {
            this.user_id = response;
        });
    }

    create(){

        var dataLead = {
            data: {
                type: 'leads',
                attributes: this.attributes
            },
            relationships: {
                user: {
                    data: {
                        type: 'users',
                        id: this.user_id
                    }
                }
            }
        };

        this.BaseService.request(
            {
                endpoint: `leads`,
                method: 'POST',
                //dataName: 'data',
                dataObj: dataLead
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.lead');
        });

    }

    update(){
        console.log("update");
    }

}

LeadsFormController.$inject = ['$state', 'BaseService'];

export default LeadsFormController;