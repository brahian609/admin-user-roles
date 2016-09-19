class LeadsController {

    constructor(BaseService, $state) {
        this.BaseService = BaseService;
        this.$state = $state;
        this.getLeads();
    }

    getLeads(){

        this.BaseService.request(
            {
                endpoint: `leads`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.leads = data;
        });

    }

    prepareUdate(id){
        this.$state.go('app.lead.update', {id});
    }

}

LeadsController.$inject = ['BaseService', '$state'];

export default LeadsController