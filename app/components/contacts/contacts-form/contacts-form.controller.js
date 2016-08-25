class ContactsFormController {

    constructor($state, BaseService){
        this.$state = $state;
        this.BaseService = BaseService;
        this.company = {};
    }

    create(){

        this.BaseService.request(
            {
                endpoint: `companies`,
                method: 'POST',
                dataName: 'company',
                dataObj: this.company
            }
        ).then(({data}) => {
            console.log('data');
            console.log(data);
            this.$state.go('app.companies');
        });

    }

    update(){
        console.log("update");
    }

}

ContactsFormController.$inject = ['$state', 'BaseService'];

export default ContactsFormController;