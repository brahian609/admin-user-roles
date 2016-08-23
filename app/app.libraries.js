import angular    from 'angular';
import uiRouter   from 'angular-ui-router';
import uiBoostrap from 'angular-ui-bootstrap';
import angularJwt from 'angular-jwt';

let librariesModules = angular.module('app.libraries', [
    uiRouter,
    uiBoostrap,
    angularJwt
]);

export default librariesModules;