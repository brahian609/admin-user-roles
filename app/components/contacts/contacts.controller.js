class ContactsController {

    constructor(BaseService) {
        this.BaseService = BaseService;
        this.getContacts();
    }

    getContacts(){

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

    getCompany(id){

        this.BaseService.request(
            {
                endpoint: `leads/${id}.json`,
                method: 'GET'
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
        });

    }

}

ContactsController.$inject = ['BaseService'];

export default ContactsController