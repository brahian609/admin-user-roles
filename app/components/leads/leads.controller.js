class LeadsController {

    constructor(BaseService) {
        this.BaseService = BaseService;
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

    getLead(id){

        this.BaseService.request(
            {
                endpoint: `leads/${id}.json`,
                method: 'GET'
            }
        ).then(({data}) => {
            this.lead = data;
            console.log('data');
            console.log(data);
        });

    }

}

LeadsController.$inject = ['BaseService'];

export default LeadsController