class AdminNavController {

    constructor($state){

        this.links = [
            {name: 'Usuarios', route: 'users'},
            {name: 'Roles', route: 'roles'},
            {name: 'Perfiles', route: 'profiles'}
        ];

    }

}

AdminNavController.$inject = ['$state'];

export default AdminNavController;