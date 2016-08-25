class appController {

    constructor($state, BaseService, $scope){
        this.BaseService = BaseService;

        this.crm_modules = $scope.$root.crm_modules;

    }

    checkNav(module) {

        return this.BaseService.check_navigation(module, this.crm_modules);

    }


}

appController.$inject = ['$state', 'BaseService', '$scope'];

export default appController