class AdminNavController {

    constructor($state){

        this.links = [
            {name: 'Usuarios', route: 'app.user'},
            {name: 'Roles', route: 'app.role'},
            {name: 'Perfiles', route: 'app.profile'},
            {name: 'Grupos', route: 'app.group'}
        ];

    }

}

AdminNavController.$inject = ['$state'];

export default AdminNavController;