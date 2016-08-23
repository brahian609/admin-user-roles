class AdminNavController {

    constructor($state){

        this.links = [
            {name: 'Compañias', route: 'app.companies'},
            {name: 'Usuarios', route: 'app.users'},
            {name: 'Roles', route: 'app.roles'},
            {name: 'Perfiles', route: 'app.profiles'}
        ];

    }

}

AdminNavController.$inject = ['$state'];

export default AdminNavController;