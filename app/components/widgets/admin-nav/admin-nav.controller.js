class AdminNavController {

    constructor($state){

        this.links = [
            {name: 'Usuarios', route: 'app.users'},
            {name: 'Roles', route: 'app.role'},
            {name: 'Perfiles', route: 'app.profile'}
        ];

    }

}

AdminNavController.$inject = ['$state'];

export default AdminNavController;