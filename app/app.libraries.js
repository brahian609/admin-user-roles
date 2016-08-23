import angular    from 'angular';
import uiRouter   from 'angular-ui-router';
import uiBoostrap from 'angular-ui-bootstrap';

let librariesModules = angular.module('app.libraries', [
    uiRouter,
    uiBoostrap
]);

export default librariesModules;