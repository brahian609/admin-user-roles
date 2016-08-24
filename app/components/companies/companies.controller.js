class CompaniesController {

    constructor(BaseService) {
        this.BaseService = BaseService;
        this.getCompanies();
    }

    getCompanies(){

        this.BaseService.request(
            {
                endpoint: `companies`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.companies = data;
        });

    }

    getCompany(id){

        this.BaseService.request(
            {
                endpoint: `companies/${id}.json`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
        });

    }

}

CompaniesController.$inject = ['BaseService'];

export default CompaniesController