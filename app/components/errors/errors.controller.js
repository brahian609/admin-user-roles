class ErrorsController {

    constructor($timeout, $window){

        $timeout(() => {
            $window.history.back();
        },2000);

    }

}

ErrorsController.$inject = ['$timeout', '$window'];

export default ErrorsController;