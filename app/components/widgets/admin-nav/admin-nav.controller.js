class AdminNavController {

    constructor($state){

        this.links = [
            {name: 'Usuarios', route: 'app.users'},
            {name: 'Roles', route: 'app.roles'},
            {name: 'Perfiles', route: 'app.profiles'}
        ];

    }

}

AdminNavController.$inject = ['$state'];

export default AdminNavController;