class LeadsFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
    }

    $onInit(){
        this.lead = {};
        this.BaseService.getUserId().then(response => {
            this.lead.user_id = response;
        });
    }

    create(){

        console.log('this.lead');
        console.log(this.lead);

        this.BaseService.request(
            {
                endpoint: `leads`,
                method: 'POST',
                dataName: 'lead',
                dataObj: this.lead
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